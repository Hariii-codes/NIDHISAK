import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, IndianRupee, Clock, PieChart } from 'lucide-react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { calculateEMI, calculateTotalAmount, calculateTotalInterest, formatCurrency } from '../../../utils/loan';

interface EMICalculatorProps {
  defaultPrincipal?: number;
  defaultInterestRate?: number;
  defaultTenure?: number;
  onCalculate?: (emi: number) => void;
}

const EMICalculator: React.FC<EMICalculatorProps> = ({
  defaultPrincipal = 1000000,
  defaultInterestRate = 8.5,
  defaultTenure = 240,
  onCalculate
}) => {
  const [principal, setPrincipal] = useState(defaultPrincipal);
  const [interestRate, setInterestRate] = useState(defaultInterestRate);
  const [tenure, setTenure] = useState(defaultTenure);
  const [emi, setEMI] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateLoanDetails();
  }, []);

  const calculateLoanDetails = () => {
    const calculatedEMI = calculateEMI(principal, interestRate, tenure);
    const calculatedTotalAmount = calculateTotalAmount(calculatedEMI, tenure);
    const calculatedTotalInterest = calculateTotalInterest(calculatedTotalAmount, principal);
    
    setEMI(calculatedEMI);
    setTotalAmount(calculatedTotalAmount);
    setTotalInterest(calculatedTotalInterest);
    
    if (onCalculate) {
      onCalculate(calculatedEMI);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-primary-700 mb-6 flex items-center">
        <Calculator className="mr-2" size={24} />
        EMI Calculator
      </h3>
      
      <div className="space-y-6">
        <div>
          <Input
            label="Loan Amount"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            leftIcon={<IndianRupee size={18} />}
            fullWidth
          />
          <input
            type="range"
            min="100000"
            max="10000000"
            step="100000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        
        <div>
          <Input
            label="Interest Rate (%)"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            step="0.1"
            fullWidth
          />
          <input
            type="range"
            min="5"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        
        <div>
          <Input
            label="Loan Tenure (months)"
            type="number"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            leftIcon={<Clock size={18} />}
            fullWidth
          />
          <input
            type="range"
            min="12"
            max="360"
            step="12"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        
        <Button
          variant="primary"
          fullWidth
          onClick={calculateLoanDetails}
        >
          Calculate EMI
        </Button>
      </div>

      {emi > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-primary-600 mb-1">Monthly EMI</p>
              <p className="text-2xl font-semibold text-primary-700">{formatCurrency(emi)}</p>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-primary-600 mb-1">Total Interest</p>
              <p className="text-2xl font-semibold text-primary-700">{formatCurrency(totalInterest)}</p>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-primary-600 mb-1">Total Amount</p>
              <p className="text-2xl font-semibold text-primary-700">{formatCurrency(totalAmount)}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Principal</span>
              <span className="text-sm font-medium text-primary-700">{formatCurrency(principal)}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-600"
                style={{ width: `${(principal / totalAmount) * 100}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-between mb-2 mt-4">
              <span className="text-sm text-gray-600">Interest</span>
              <span className="text-sm font-medium text-primary-700">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-secondary-500"
                style={{ width: `${(totalInterest / totalAmount) * 100}%` }}
              ></div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EMICalculator;