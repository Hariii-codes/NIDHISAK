import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const eligibilityCriteria = [
  {
    id: 1,
    title: 'Age',
    description: 'Applicants must be between 21 to 65 years of age at the time of loan maturity.',
    icon: <Check className="w-5 h-5 text-success-500" />,
  },
  {
    id: 2,
    title: 'Income',
    description: 'Minimum monthly income of ₹15,000 for salaried individuals and ₹25,000 for self-employed.',
    icon: <Check className="w-5 h-5 text-success-500" />,
  },
  {
    id: 3,
    title: 'Employment',
    description: 'At least 1 year of employment with current employer for salaried individuals. 2 years of business operation for self-employed.',
    icon: <Check className="w-5 h-5 text-success-500" />,
  },
  {
    id: 4,
    title: 'Credit Score',
    description: 'Minimum credit score of 700+ is preferred. Applicants with lower scores may be subject to higher interest rates.',
    icon: <Check className="w-5 h-5 text-success-500" />,
  },
  {
    id: 5,
    title: 'Debt-to-Income Ratio',
    description: 'Your total EMIs (including the applied loan) should not exceed 50% of your monthly income.',
    icon: <Check className="w-5 h-5 text-success-500" />,
  },
  {
    id: 6,
    title: 'Stability',
    description: 'Stable residence for at least 1 year and valid KYC documents.',
    icon: <Check className="w-5 h-5 text-success-500" />,
  },
];

const commonRejectionReasons = [
  'Poor credit history or low credit score',
  'Unstable employment history',
  'Insufficient income to support loan repayment',
  'High existing debt obligations',
  'Incomplete or incorrect information in application',
  'Legal issues or pending litigation',
];

const EligibilityCriteria = () => {
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
            Loan Eligibility Criteria
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding our eligibility requirements will help you prepare a successful loan application
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary-700 mb-6">
              Basic Eligibility Requirements
            </h3>
            
            <div className="space-y-6">
              {eligibilityCriteria.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <div className="mr-4 mt-1">
                    <div className="bg-green-100 p-1 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-700 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary-700 mb-6">
              Common Rejection Reasons
            </h3>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <p className="text-gray-600 mb-6">
                Applications may be rejected for the following reasons. Addressing these factors can improve your chances of approval.
              </p>
              
              <div className="space-y-4">
                {commonRejectionReasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-0.5">
                      <div className="bg-red-100 p-1 rounded-full">
                        <X className="w-4 h-4 text-error-500" />
                      </div>
                    </div>
                    <p className="text-gray-700">{reason}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-primary-700 mb-2">Need More Information?</h4>
                <p className="text-gray-600">
                  Our loan experts can help you understand your eligibility and improve your chances of approval. Use our chatbot or contact us for personalized assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;