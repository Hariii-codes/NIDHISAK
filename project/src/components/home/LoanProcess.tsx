import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  FileText, 
  Search, 
  CheckCircle, 
  CreditCard 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Check Eligibility',
    description: 'Fill out a quick form to check if you qualify for our loan offerings.',
    icon: <Search className="w-8 h-8 text-primary-600" />,
  },
  {
    id: 2,
    title: 'Submit Application',
    description: 'Complete your application with necessary documents and personal information.',
    icon: <FileText className="w-8 h-8 text-primary-600" />,
  },
  {
    id: 3,
    title: 'Verification',
    description: 'Our team verifies your application details and documents.',
    icon: <ClipboardCheck className="w-8 h-8 text-primary-600" />,
  },
  {
    id: 4,
    title: 'Approval',
    description: 'Receive approval notification with loan terms and conditions.',
    icon: <CheckCircle className="w-8 h-8 text-primary-600" />,
  },
  {
    id: 5,
    title: 'Disbursement',
    description: 'Funds are transferred to your bank account within 24 hours.',
    icon: <CreditCard className="w-8 h-8 text-primary-600" />,
  },
];

const LoanProcess = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Simple Loan Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've made our loan process simple, transparent, and hassle-free. Here's how it works:
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center border-2 border-primary-500 mb-4">
                  {step.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanProcess;