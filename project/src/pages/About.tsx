import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award } from 'lucide-react';
import ChatbotWidget from '../components/chatbot/ChatbotWidget';

const About: React.FC = () => {
  const coreValues = [
    {
      icon: <Shield className="h-10 w-10 text-primary-600" />,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of data security and privacy protection for our clients.',
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-600" />,
      title: 'Speed & Efficiency',
      description: 'Our streamlined processes ensure quick loan approvals and efficient service delivery.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: 'Customer-Centric',
      description: 'We put our customers first, offering personalized solutions that meet their financial needs.',
    },
    {
      icon: <Award className="h-10 w-10 text-primary-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of our service, from technology to customer support.',
    },
  ];

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
              About NidhiSakhi
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We're on a mission to make financial assistance accessible, transparent, and hassle-free for everyone in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary-800 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2020, NidhiSakhi was born out of a vision to transform the traditional loan process in India. Our founders, with decades of experience in the financial sector, recognized the challenges faced by ordinary citizens in accessing credit.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Too often, they saw deserving applicants being rejected due to complex procedures, lack of transparency, or simply not understanding the eligibility criteria. This led to the creation of NidhiSakhi - a platform that uses technology to simplify loan processes and make financial services more accessible.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we've helped thousands of customers across India secure loans for their personal, professional, and educational needs, maintaining our commitment to transparency, efficiency, and customer satisfaction.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="NidhiSakhi Team"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do and how we serve our customers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-50 p-4 rounded-full inline-block">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet the experienced professionals guiding NidhiSakhi's mission
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Vikram Mehta"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-1">Vikram Mehta</h3>
                <p className="text-gray-500 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years of experience in financial services, Vikram leads our vision to transform lending in India.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Priya Sharma"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-1">Priya Sharma</h3>
                <p className="text-gray-500 mb-3">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Priya brings her expertise in fintech to develop the innovative technologies behind our platform.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Rajesh Kumar"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-1">Rajesh Kumar</h3>
                <p className="text-gray-500 mb-3">Chief Financial Officer</p>
                <p className="text-gray-600">
                  Rajesh oversees our financial strategy, ensuring we maintain our commitment to sustainable growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-secondary-500 mb-2">5,000+</p>
              <p className="text-lg text-primary-100">Loans Processed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-secondary-500 mb-2">₹500Cr+</p>
              <p className="text-lg text-primary-100">Loan Value Disbursed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-secondary-500 mb-2">4.8/5</p>
              <p className="text-lg text-primary-100">Customer Satisfaction</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-secondary-500 mb-2">15+</p>
              <p className="text-lg text-primary-100">Banking Partners</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ChatbotWidget />
    </div>
  );
};

export default About;