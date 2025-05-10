import { motion } from 'framer-motion';
import { Home, Briefcase, GraduationCap, User } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const loanTypes = [
  {
    id: 1,
    title: 'Personal Loan',
    description: 'Flexible personal loans with competitive interest rates for various needs.',
    icon: <User className="w-8 h-8 text-primary-600" />,
    features: ['Quick approval', 'Minimal documentation', 'Flexible repayment options'],
    interestRate: '10.99% - 14.99%',
    maxAmount: '₹15,00,000',
  },
  {
    id: 2,
    title: 'Home Loan',
    description: 'Realize your dream of owning a home with our affordable home loans.',
    icon: <Home className="w-8 h-8 text-primary-600" />,
    features: ['Low interest rates', 'Up to 30 years tenure', 'Simple documentation'],
    interestRate: '7.99% - 9.99%',
    maxAmount: '₹5,00,00,000',
  },
  {
    id: 3,
    title: 'Business Loan',
    description: 'Fuel your business growth with customized financing solutions.',
    icon: <Briefcase className="w-8 h-8 text-primary-600" />,
    features: ['No collateral for small loans', 'Special rates for SMEs', 'Tax benefits available'],
    interestRate: '11.99% - 15.99%',
    maxAmount: '₹50,00,000',
  },
  {
    id: 4,
    title: 'Education Loan',
    description: 'Invest in your future with education loans for domestic and international studies.',
    icon: <GraduationCap className="w-8 h-8 text-primary-600" />,
    features: ['No repayment during study period', 'Cover tuition & living expenses', 'Tax benefits'],
    interestRate: '8.99% - 11.99%',
    maxAmount: '₹75,00,000',
  },
];

const LoanTypes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Loan Options Tailored For You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of loan products designed to meet your financial needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={loan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 p-6 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 shadow-sm">
                  {loan.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-2">{loan.title}</h3>
                <p className="text-gray-600 mb-4">{loan.description}</p>
                
                <div className="space-y-1 mb-4">
                  {loan.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <span className="text-secondary-500 mr-2">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between text-sm text-gray-600 mb-6">
                  <div>
                    <p className="font-medium">Interest</p>
                    <p>{loan.interestRate}</p>
                  </div>
                  <div>
                    <p className="font-medium">Max Amount</p>
                    <p>{loan.maxAmount}</p>
                  </div>
                </div>
                
                <Link to="/eligibility" className="block w-full">
                  <Button variant="outline" fullWidth>
                    Check Eligibility
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;