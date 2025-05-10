import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import ChatbotWidget from '../components/chatbot/ChatbotWidget';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // In a real application, this would be an API call
      console.log('Form data submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We're here to answer your questions and help you with your financial needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary-800 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have questions about our loan products or need assistance with your application? Our dedicated team is ready to help you find the right financial solution.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-50 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-1">
                        Visit Us
                      </h3>
                      <p className="text-gray-600">
                        123 Financial District<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-50 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-600">
                        contact@nidhisakhi.com<br />
                        support@nidhisakhi.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-50 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-600">
                        +91 1234 567890<br />
                        Monday to Saturday, 9am to 6pm
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary-700 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary-50 p-2 rounded-full hover:bg-primary-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary-600"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-primary-50 p-2 rounded-full hover:bg-primary-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary-600"
                      >
                        <path d="M22 4c0 0-4 0-7 2c-1 1-2 2-3 2c-1.5 0-2 0-3-1c-1 1-2 2-3 2c-.474 0-1 .5-1 2c0 2 1 3 2 4c1 1 2 2 3 3c1 1 1 2 1 3"></path>
                        <path d="M2 20c0 0 4 0 7-2c3-2 6-6 6-6"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-primary-50 p-2 rounded-full hover:bg-primary-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary-600"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="bg-primary-50 p-2 rounded-full hover:bg-primary-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary-600"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-primary-700 mb-6">
                    Send Us a Message
                  </h2>
                  
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
                      <CheckCircle className="text-success-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <h3 className="text-success-500 font-medium">Message Sent Successfully!</h3>
                        <p className="text-green-700 text-sm">Thank you for contacting us. Our team will get back to you shortly.</p>
                      </div>
                    </div>
                  )}
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
                      <AlertCircle className="text-error-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <h3 className="text-error-500 font-medium">Error</h3>
                        <p className="text-red-700 text-sm">{submitError}</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <Input
                        label="Full Name"
                        fullWidth
                        placeholder="Enter your full name"
                        {...register('name', { 
                          required: 'Name is required',
                        })}
                        error={errors.name?.message}
                      />
                      
                      <Input
                        label="Email Address"
                        type="email"
                        fullWidth
                        placeholder="Enter your email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          }
                        })}
                        error={errors.email?.message}
                      />
                      
                      <Input
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        placeholder="Enter your phone number"
                        {...register('phone', { 
                          required: 'Phone number is required',
                        })}
                        error={errors.phone?.message}
                      />
                      
                      <Input
                        label="Subject"
                        fullWidth
                        placeholder="What is your message about?"
                        {...register('subject', { 
                          required: 'Subject is required',
                        })}
                        error={errors.subject?.message}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className={`w-full px-4 py-2 border ${
                          errors.message ? 'border-error-500' : 'border-gray-300'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                        placeholder="Tell us how we can help you..."
                        {...register('message', { 
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters',
                          }
                        })}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={isSubmitting}
                      leftIcon={<Send size={18} />}
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600">
              We're conveniently located in the heart of Mumbai's financial district
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md"
          >
            <div className="bg-gray-200 w-full h-[400px] flex items-center justify-center">
              <div className="text-gray-500 text-center p-6">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium">Map would be embedded here</p>
                <p className="text-sm">123 Financial District, Mumbai, Maharashtra 400001, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-primary-700 mb-2">
                  What are your customer service hours?
                </h3>
                <p className="text-gray-600">
                  Our customer service team is available Monday through Saturday, from 9am to 6pm IST. You can reach us via phone, email, or by visiting our office.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-primary-700 mb-2">
                  How quickly will I receive a response to my inquiry?
                </h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our customer service line directly.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-primary-700 mb-2">
                  Can I schedule an appointment with a loan officer?
                </h3>
                <p className="text-gray-600">
                  Yes, you can schedule an in-person or virtual appointment with one of our loan officers. Please use our contact form or call us directly to arrange a convenient time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-primary-700 mb-2">
                  How can I check the status of my loan application?
                </h3>
                <p className="text-gray-600">
                  You can check the status of your application by logging into your account on our website, or by contacting our customer service team with your application reference number.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <ChatbotWidget />
    </div>
  );
};

export default Contact;