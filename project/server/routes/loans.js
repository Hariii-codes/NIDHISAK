import express from 'express';
import { body, validationResult } from 'express-validator';
import Loan from '../models/Loan.js';

const router = express.Router();

// Get all loans for the authenticated user
router.get('/', async (req, res) => {
  try {
    const loans = await Loan.find({ user: req.user.user.id }).sort({ applicationDate: -1 });
    res.json(loans);
  } catch (error) {
    console.error('Get loans error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get loan by ID
router.get('/:id', async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    
    // Verify loan belongs to the authenticated user
    if (loan.user.toString() !== req.user.user.id) {
      return res.status(403).json({ message: 'Not authorized to access this loan' });
    }
    
    res.json(loan);
  } catch (error) {
    console.error('Get loan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new loan application
router.post(
  '/',
  [
    body('loanType').isIn(['personal', 'home', 'business', 'education', 'car']).withMessage('Invalid loan type'),
    body('amount').isNumeric().withMessage('Amount must be a number'),
    body('tenure').isNumeric().withMessage('Tenure must be a number'),
    body('monthlyIncome').isNumeric().withMessage('Monthly income must be a number'),
    body('employmentType').isIn(['salaried', 'self-employed', 'business']).withMessage('Invalid employment type'),
    body('employmentDuration').isNumeric().withMessage('Employment duration must be a number'),
    body('creditScore').isNumeric().withMessage('Credit score must be a number')
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const {
      loanType,
      amount,
      tenure,
      monthlyIncome,
      employmentType,
      employmentDuration,
      existingEmi,
      creditScore,
      documents
    } = req.body;
    
    try {
      // Calculate interest rate based on loan type and credit score
      let interestRate;
      switch (loanType) {
        case 'personal':
          interestRate = creditScore >= 750 ? 10.99 : creditScore >= 700 ? 12.99 : 14.99;
          break;
        case 'home':
          interestRate = creditScore >= 750 ? 7.99 : creditScore >= 700 ? 8.99 : 9.99;
          break;
        case 'business':
          interestRate = creditScore >= 750 ? 11.99 : creditScore >= 700 ? 13.99 : 15.99;
          break;
        case 'education':
          interestRate = creditScore >= 750 ? 8.99 : creditScore >= 700 ? 9.99 : 11.99;
          break;
        case 'car':
          interestRate = creditScore >= 750 ? 8.50 : creditScore >= 700 ? 9.50 : 10.50;
          break;
        default:
          interestRate = 12.99;
      }
      
      // Create new loan application
      const loan = new Loan({
        user: req.user.user.id,
        loanType,
        amount,
        interestRate,
        tenure,
        monthlyIncome,
        employmentType,
        employmentDuration,
        existingEmi: existingEmi || 0,
        creditScore,
        documents: documents || []
      });
      
      await loan.save();
      
      res.status(201).json(loan);
    } catch (error) {
      console.error('Create loan error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Check loan eligibility
router.post(
  '/check-eligibility',
  [
    body('loanType').isIn(['personal', 'home', 'business', 'education', 'car']).withMessage('Invalid loan type'),
    body('amount').isNumeric().withMessage('Amount must be a number'),
    body('monthlyIncome').isNumeric().withMessage('Monthly income must be a number'),
    body('employmentType').isIn(['salaried', 'self-employed', 'business']).withMessage('Invalid employment type'),
    body('employmentDuration').isNumeric().withMessage('Employment duration must be a number'),
    body('creditScore').isNumeric().withMessage('Credit score must be a number'),
    body('age').isNumeric().withMessage('Age must be a number')
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const {
      loanType,
      amount,
      monthlyIncome,
      employmentType,
      employmentDuration,
      existingEmi,
      creditScore,
      age
    } = req.body;
    
    try {
      // Perform eligibility check
      let score = 0;
      const reasons = [];
      
      // Age score (21-35 ideal)
      if (age >= 21 && age <= 35) score += 20;
      else if (age > 35 && age <= 50) score += 15;
      else if (age > 50 && age <= 65) score += 10;
      else {
        score += 0;
        reasons.push('Age outside of preferred range (21-65 years)');
      }
      
      // Income score
      if (monthlyIncome >= 50000) score += 25;
      else if (monthlyIncome >= 30000) score += 20;
      else if (monthlyIncome >= 15000) score += 15;
      else {
        score += 0;
        reasons.push('Income below minimum requirement');
      }
      
      // Employment duration score
      if (employmentDuration >= 3) score += 15;
      else if (employmentDuration >= 1) score += 10;
      else {
        score += 0;
        reasons.push('Insufficient employment history');
      }
      
      // Credit score
      if (creditScore >= 750) score += 25;
      else if (creditScore >= 700) score += 20;
      else if (creditScore >= 650) score += 15;
      else {
        score += 5;
        reasons.push('Low credit score');
      }
      
      // Calculate debt-to-income ratio
      const dti = ((existingEmi || 0) / monthlyIncome) * 100;
      
      if (dti < 30) score += 15;
      else if (dti < 50) score += 10;
      else {
        score += 0;
        reasons.push('High debt-to-income ratio');
      }
      
      // Determine eligibility based on score
      const eligible = score >= 60;
      
      // Calculate max eligible amount based on income and DTI
      const maxAllowableDti = 0.5; // 50% of income
      const availableIncome = monthlyIncome * maxAllowableDti - (existingEmi || 0);
      const maxEligibleAmount = Math.max(0, availableIncome * 36); // 3 years loan term
      
      // Calculate interest rate based on credit score and employment type
      let interestRate;
      switch (loanType) {
        case 'personal':
          interestRate = creditScore >= 750 ? 10.99 : creditScore >= 700 ? 12.99 : 14.99;
          break;
        case 'home':
          interestRate = creditScore >= 750 ? 7.99 : creditScore >= 700 ? 8.99 : 9.99;
          break;
        case 'business':
          interestRate = creditScore >= 750 ? 11.99 : creditScore >= 700 ? 13.99 : 15.99;
          break;
        case 'education':
          interestRate = creditScore >= 750 ? 8.99 : creditScore >= 700 ? 9.99 : 11.99;
          break;
        case 'car':
          interestRate = creditScore >= 750 ? 8.50 : creditScore >= 700 ? 9.50 : 10.50;
          break;
        default:
          interestRate = 12.99;
      }
      
      if (employmentType === 'self-employed') interestRate += 1;
      
      // Calculate suggested EMI
      const tenure = 36; // 3 years as default
      const suggestedEmi = maxEligibleAmount > 0 
        ? (maxEligibleAmount * (interestRate / 100) / 12) / (1 - Math.pow(1 + (interestRate / 100) / 12, -tenure))
        : 0;
      
      res.json({
        eligible,
        score,
        message: eligible 
          ? 'Congratulations! You are eligible for a loan.' 
          : 'Based on the information provided, you do not meet the eligibility criteria at this time.',
        maxEligibleAmount: Math.round(maxEligibleAmount),
        suggestedEmi: Math.round(suggestedEmi),
        interestRate,
        reasons: !eligible ? reasons : undefined
      });
    } catch (error) {
      console.error('Check eligibility error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;