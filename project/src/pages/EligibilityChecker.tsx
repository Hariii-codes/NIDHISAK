import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import ChatbotWidget from '../components/chatbot/ChatbotWidget';

interface EligibilityFormData {
  loanType: string;
  loanAmount: number;
  income: number;
  employmentType: string;
  employmentDuration: number;
  creditScore: number;
  existingEmi: number;
  age: number;
}

interface EligibilityResult {
  eligible: boolean;
  message: string;
  maxEligibleAmount?: number;
  suggestedEmi?: number;
  interestRate?: number;
  reasons?: string[];
  score?: number;
}

const EligibilityChecker: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<EligibilityResult | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<EligibilityFormData>();

  const checkEligibility = (data: EligibilityFormData): EligibilityResult => {
    // This is a simplified mock implementation
    // In a real app, this would make an API call to the backend
    
    let score = 0;
    const reasons: string[] = [];
    
    // Calculate a score based on the input data
    // Age score (21-35 ideal)
    if (data.age >= 21 && data.age <= 35) score += 20;
    else if (data.age > 35 && data.age <= 50) score += 15;
    else if (data.age > 50 && data.age <= 65) score += 10;
    else {
      score += 0;
      reasons.push('Age outside of preferred range (21-65 years)');
    }
    
    // Income score
    if (data.income >= 50000) score += 25;
    else if (data.income >= 30000) score += 20;
    else if (data.income >= 15000) score += 15;
    else {
      score += 0;
      reasons.push('Income below minimum requirement');
    }
    
    // Employment duration score
    if (data.employmentDuration >= 3) score += 15;
    else if (data.employmentDuration >= 1) score += 10;
    else {
      score += 0;
      reasons.push('Insufficient employment history');
    }
    
    // Credit score
    if (data.creditScore >= 750) score += 25;
    else if (data.creditScore >= 700) score += 20;
    else if (data.creditScore >= 650) score += 15;
    else {
      score += 5;
      reasons.push('Low credit score');
    }
    
    // Calculate debt-to-income ratio
    const dti = (data.existingEmi / data.income) * 100;
    
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
    const availableIncome = data.income * maxAllowableDti - data.existingEmi;
    const maxEligibleAmount = Math.max(0, availableIncome * 36); // 3 years loan term
    
    // Calculate interest rate based on credit score and employment type
    let interestRate = 12; // Base rate
    if (data.creditScore >= 750) interestRate -= 2;
    else if (data.creditScore < 650) interestRate += 3;
    
    if (data.employmentType === 'self-employed') interestRate += 1;
    
    // Calculate suggested EMI
    const suggestedEmi = maxEligibleAmount > 0 
      ? (maxEligibleAmount * (interestRate / 100) / 12) / (1 - Math.pow(1 + (interestRate / 100) / 12, -36))
      : 0;
    
    return {
      eligible,
      score,
      message: eligible 
        ? 'Congratulations! You are eligible for a loan.' 
        : 'Based on the information provided, you do not meet the eligibility criteria at this time.',
      maxEligibleAmount: Math.round(maxEligibleAmount),
      suggestedEmi: Math.round(suggestedEmi),
      interestRate,
      reasons: !eligible ? reasons : undefined
    };
  };

  const onSubmit = (data: EligibilityFormData) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const eligibilityResult = checkEligibility(data);
      setResult(eligibilityResult);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Loan Eligibility Checker
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to check your loan eligibility. This process takes just a minute and does not affect your credit score.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary-700">Enter Your Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Loan Type
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      {...register('loanType', { required: 'Loan type is required' })}
                    >
                      <option value="">Select Loan Type</option>
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="business">Business Loan</option>
                      <option value="education">Education Loan</option>
                    </select>
                    {errors.loanType && (
                      <p className="mt-1 text-sm text-error-500">{errors.loanType.message}</p>
                    )}
                  </div>

                  <Input
                    label="Loan Amount (₹)"
                    type="number"
                    placeholder="Enter amount"
                    {...register('loanAmount', { 
                      required: 'Loan amount is required',
                      min: {
                        value: 10000,
                        message: 'Minimum loan amount is ₹10,000',
                      },
                      max: {
                        value: 10000000,
                        message: 'Maximum loan amount is ₹1,00,00,000',
                      }
                    })}
                    error={errors.loanAmount?.message}
                  />

                  <Input
                    label="Monthly Income (₹)"
                    type="number"
                    placeholder="Enter monthly income"
                    {...register('income', { 
                      required: 'Income is required',
                      min: {
                        value: 10000,
                        message: 'Minimum income should be ₹10,000',
                      }
                    })}
                    error={errors.income?.message}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Employment Type
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      {...register('employmentType', { required: 'Employment type is required' })}
                    >
                      <option value="">Select Employment Type</option>
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="business">Business Owner</option>
                    </select>
                    {errors.employmentType && (
                      <p className="mt-1 text-sm text-error-500">{errors.employmentType.message}</p>
                    )}
                  </div>

                  <Input
                    label="Years at Current Employment"
                    type="number"
                    step="0.1"
                    placeholder="Enter years"
                    {...register('employmentDuration', { 
                      required: 'Employment duration is required',
                      min: {
                        value: 0,
                        message: 'Value must be positive',
                      }
                    })}
                    error={errors.employmentDuration?.message}
                  />

                  <Input
                    label="Credit Score"
                    type="number"
                    placeholder="Enter credit score (300-900)"
                    {...register('creditScore', { 
                      required: 'Credit score is required',
                      min: {
                        value: 300,
                        message: 'Minimum value is 300',
                      },
                      max: {
                        value: 900,
                        message: 'Maximum value is 900',
                      }
                    })}
                    error={errors.creditScore?.message}
                  />

                  <Input
                    label="Current Monthly EMI Obligations (₹)"
                    type="number"
                    placeholder="Enter total EMIs"
                    {...register('existingEmi', { 
                      required: 'Current EMI information is required',
                      min: {
                        value: 0,
                        message: 'Value must be positive',
                      }
                    })}
                    error={errors.existingEmi?.message}
                  />

                  <Input
                    label="Age"
                    type="number"
                    placeholder="Enter your age"
                    {...register('age', { 
                      required: 'Age is required',
                      min: {
                        value: 18,
                        message: 'Minimum age is 18',
                      },
                      max: {
                        value: 70,
                        message: 'Maximum age is 70',
                      }
                    })}
                    error={errors.age?.message}
                  />
                </div>

                <div className="mt-8">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isLoading}
                    fullWidth
                  >
                    Check Eligibility
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Card className={result.eligible ? 'bg-green-50' : 'bg-red-50'}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    {result.eligible ? (
                      <>
                        <CheckCircle className="text-success-500 mr-2" size={24} />
                        <span className="text-success-500">Congratulations!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="text-error-500 mr-2" size={24} />
                        <span className="text-error-500">Not Eligible</span>
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    {result.message}
                  </p>

                  {result.eligible ? (
                    <div className="bg-white p-4 rounded-md border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Maximum Eligible Amount</p>
                          <p className="text-lg font-semibold text-primary-700">₹{result.maxEligibleAmount?.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Suggested EMI</p>
                          <p className="text-lg font-semibold text-primary-700">₹{result.suggestedEmi?.toLocaleString()}/month</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Estimated Interest Rate</p>
                          <p className="text-lg font-semibold text-primary-700">{result.interestRate}% p.a.</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <p className="text-sm text-gray-600 mb-4">
                          Want to proceed with your loan application? Our loan experts are ready to help you.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                          <Button variant="primary">Apply Now</Button>
                          <Button variant="outline">Contact Loan Officer</Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white p-4 rounded-md border border-gray-200">
                      <p className="font-medium text-gray-800 mb-2">
                        Reasons:
                      </p>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        {result.reasons?.map((reason, index) => (
                          <li key={index} className="text-gray-700">{reason}</li>
                        ))}
                      </ul>
                      
                      <p className="text-sm text-gray-600 mb-4">
                        Don't worry! Our loan experts can help you improve your eligibility. Talk to us about your options.
                      </p>
                      
                      <Button variant="primary">Speak to a Loan Expert</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <ChatbotWidget />
    </div>
  );
};

export default EligibilityChecker;