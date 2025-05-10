import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, GraduationCap, User, Car, Sparkles, FileCheck, Clock, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import ChatbotWidget from '../components/chatbot/ChatbotWidget';

const loanTypes = [
  {
    id: 1,
    title: 'Personal Loan',
    description: 'Quick personal loans for multiple needs with minimal documentation and fast approval.',
    icon: <User className="w-8 h-8 text-primary-600" />,
    features: [
      'Loans up to ₹15 lakhs',
      'Interest rates from 10.99%',
      'Flexible repayment options: 12-60 months',
      'No collateral required',
      'Minimal documentation',
      'Quick approval in as little as 24 hours',
    ],
    eligibleFor: [
      'Medical emergencies',
      'Home renovation',
      'Wedding expenses',
      'Travel plans',
      'Education expenses',
      'Debt consolidation',
    ],
  },
  {
    id: 2,
    title: 'Home Loan',
    description: 'Realize your dream of homeownership with our competitive home loan solutions.',
    icon: <Home className="w-8 h-8 text-primary-600" />,
    features: [
      'Loans up to ₹5 crores',
      'Interest rates from 7.99%',
      'Tenure options: 5-30 years',
      'Up to 90% financing on property value',
      'Transparent processing fees',
      'Special rates for women applicants',
    ],
    eligibleFor: [
      'Purchase of ready property',
      'Under-construction property',
      'Land purchase & construction',
      'Home renovation/extension',
      'Balance transfer from other banks',
      'Second home purchase',
    ],
  },
  {
    id: 3,
    title: 'Business Loan',
    description: 'Fuel your business growth with our flexible financing solutions for entrepreneurs.',
    icon: <Briefcase className="w-8 h-8 text-primary-600" />,
    features: [
      'Loans up to ₹50 lakhs',
      'Interest rates from 11.99%',
      'Tenure options: 12-84 months',
      'Minimal documentation for existing businesses',
      'No collateral for loans up to ₹20 lakhs',
      'Tax benefits available on interest paid',
    ],
    eligibleFor: [
      'Working capital requirements',
      'Business expansion',
      'Equipment purchase',
      'Office renovation',
      'Inventory management',
      'Hiring & training staff',
    ],
  },
  {
    id: 4,
    title: 'Education Loan',
    description: 'Invest in a bright future with our student-friendly education loan packages.',
    icon: <GraduationCap className="w-8 h-8 text-primary-600" />,
    features: [
      'Loans up to ₹75 lakhs for studies abroad',
      'Up to ₹30 lakhs for Indian education',
      'Interest rates from 8.99%',
      'No repayment during study period + 6 months',
      'Covers tuition fees, living expenses, and more',
      'Tax benefits under Section 80E',
    ],
    eligibleFor: [
      'Undergraduate programs in India & abroad',
      'Postgraduate studies',
      'Professional courses',
      'PhD and research programs',
      'Vocational training courses',
      'Entrance exam coaching',
    ],
  },
  {
    id: 5,
    title: 'Car Loan',
    description: 'Drive home your dream car with our hassle-free auto financing options.',
    icon: <Car className="w-8 h-8 text-primary-600" />,
    features: [
      'Loans up to ₹1 crore',
      'Interest rates from 8.50%',
      'Tenure options: 1-7 years',
      'Up to 90% financing on car value',
      'Special offers for electric vehicles',
      'Quick approval process',
    ],
    eligibleFor: [
      'New cars (all brands)',
      'Pre-owned cars',
      'Electric vehicles',
      'Commercial vehicles',
      'Two-wheelers',
      'Luxury vehicles',
    ],
  },
];

const specialServices = [
  {
    icon: <Clock className="w-6 h-6 text-primary-600" />,
    title: 'Express Loans',
    description: 'Get funds disbursed within 24 hours for urgent financial needs with our expedited approval process.',
  },
  {
    icon: <FileCheck className="w-6 h-6 text-primary-600" />,
    title: 'Paperless Applications',
    description: 'Apply for loans from anywhere using our digital documentation and verification system.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary-600" />,
    title: 'Financial Advisory',
    description: 'Get expert guidance on financial planning, loan management, and debt consolidation strategies.',
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState(loanTypes[0]);

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
              Our Financial Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive loan solutions designed to meet your personal and business financial needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-primary-800 mb-4">
              Loan Solutions Tailored For You
            </h2>
            <p className="text-lg text-gray-600">
              Explore our range of financial services designed to meet your specific needs with flexible terms and competitive rates
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Service Tabs */}
            <div className="flex overflow-x-auto pb-4 space-x-4 mb-8">
              {loanTypes.map((service) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: service.id * 0.1 }}
                  className={`flex items-center px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
                    selectedService.id === service.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <span className="mr-2">{service.icon}</span>
                  <span className="font-medium">{service.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Selected Service Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              {/* Service Info */}
              <div className="p-8 bg-primary-50 md:col-span-1">
                <div className="bg-white rounded-full p-4 inline-block shadow-sm mb-6">
                  {selectedService.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary-700 mb-4">{selectedService.title}</h3>
                <p className="text-gray-600 mb-6">{selectedService.description}</p>
                <Link to="/eligibility">
                  <Button variant="primary" fullWidth>
                    Check Eligibility
                  </Button>
                </Link>
              </div>

              {/* Features & Eligibility */}
              <div className="p-8 md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-700 mb-4 flex items-center">
                      <span className="bg-primary-100 p-1 rounded-full mr-2">
                        <Sparkles className="w-4 h-4 text-primary-600" />
                      </span>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-secondary-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-700 mb-4 flex items-center">
                      <span className="bg-primary-100 p-1 rounded-full mr-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-600" />
                      </span>
                      Eligible For
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.eligibleFor.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-secondary-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Ready to apply? Our process is simple and straightforward. Get started today and receive a decision quickly.
                  </p>
                  <div className="flex space-x-4">
                    <Link to="/eligibility">
                      <Button variant="secondary">
                        Apply Now
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-primary-800 mb-4">
              Special Services
            </h2>
            <p className="text-lg text-gray-600">
              Beyond our standard loan offerings, we provide specialized services to meet your unique financial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-md"
              >
                <div className="bg-primary-50 p-3 rounded-full inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  Learn More
                  <span className="ml-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">
                Ready to Take the Next Step?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Get personalized loan solutions tailored to your financial needs. Our team is ready to help you find the perfect option.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/eligibility">
                  <Button variant="secondary" size="lg">
                    Check Eligibility
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:bg-opacity-10"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ChatbotWidget />
    </div>
  );
};

export default Services;