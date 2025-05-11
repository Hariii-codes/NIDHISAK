import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, User, ArrowRight, IndianRupee } from 'lucide-react';
import { banks } from '../data/banks';
import { LoanType } from '../types/bank';
import EMICalculator from '../components/features/loan/EMICalculator';
import BranchLocator from '../components/features/loan/BranchLocator';
import Button from '../components/ui/Button';
import { formatCurrency } from '../utils/loan';

const Loans: React.FC = () => {
  const [selectedLoanType, setSelectedLoanType] = useState<LoanType>(LoanType.HOME);

  const loanTypes = [
    {
      type: LoanType.HOME,
      title: 'Home Loan',
      icon: <Home className="w-6 h-6" />,
      description: 'Finance your dream home with competitive interest rates',
    },
    {
      type: LoanType.PERSONAL,
      title: 'Personal Loan',
      icon: <User className="w-6 h-6" />,
      description: 'Quick personal loans for your immediate needs',
    }
  ];

  const getLoansForType = () => {
    return banks.map(bank => ({
      bank: bank.name,
      loan: bank.loans.find(loan => loan.type === selectedLoanType)
    })).filter(item => item.loan);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Compare Loan Offers
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Find and compare the best loan offers from top banks in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Loan Type Selection */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loanTypes.map((loan) => (
                <motion.button
                  key={loan.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedLoanType(loan.type)}
                  className={`p-6 rounded-lg text-left transition-all ${
                    selectedLoanType === loan.type
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-800 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    {loan.icon}
                    <h3 className="text-xl font-semibold ml-2">{loan.title}</h3>
                  </div>
                  <p className={selectedLoanType === loan.type ? 'text-primary-100' : 'text-gray-600'}>
                    {loan.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loan Comparison */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-primary-800 mb-8">
              Compare {selectedLoanType === LoanType.HOME ? 'Home' : 'Personal'} Loan Offers
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Bank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Interest Rate</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Loan Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Tenure</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Processing Fee</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {getLoansForType().map(({ bank, loan }, index) => loan && (
                    <motion.tr
                      key={bank}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Building2 className="w-5 h-5 text-primary-600 mr-2" />
                          <span className="font-medium text-gray-800">{bank}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-primary-700 font-medium">{loan.interestRate}%</span>
                        <span className="text-sm text-gray-500 block">{loan.interestType}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-800">{formatCurrency(loan.minPrincipal)} - {formatCurrency(loan.maxPrincipal)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-800">{loan.minTenure} - {loan.maxTenure} months</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-800">{loan.processingFee}%</span>
                        <span className="text-sm text-gray-500 block">
                          Min: {formatCurrency(loan.processingFeeMin)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button
                          variant="primary"
                          size="sm"
                          rightIcon={<ArrowRight size={16} />}
                        >
                          Apply Now
                        </Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-primary-800 mb-8">
              Calculate Your EMI
            </h2>
            <EMICalculator />
          </div>
        </div>
      </section>

      {/* Branch Locator */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-primary-800 mb-8">
              Find Nearby Bank Branches
            </h2>
            <BranchLocator />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;