import React from 'react';
import Hero from '../components/home/Hero';
import LoanProcess from '../components/home/LoanProcess';
import LoanTypes from '../components/home/LoanTypes';
import EligibilityCriteria from '../components/home/EligibilityCriteria';
import Testimonials from '../components/home/Testimonials';
import ChatbotWidget from '../components/chatbot/ChatbotWidget';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LoanProcess />
      <LoanTypes />
      <EligibilityCriteria />
      <Testimonials />
      <ChatbotWidget />
    </div>
  );
};

export default Home;