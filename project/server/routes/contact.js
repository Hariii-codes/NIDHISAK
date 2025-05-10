import express from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';

const router = express.Router();

// Submit a contact form
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { name, email, phone, subject, message } = req.body;
    
    try {
      // Create new contact submission
      const contact = new Contact({
        name,
        email,
        phone,
        subject,
        message
      });
      
      await contact.save();
      
      res.status(201).json({ message: 'Your message has been submitted successfully' });
    } catch (error) {
      console.error('Contact form submission error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;