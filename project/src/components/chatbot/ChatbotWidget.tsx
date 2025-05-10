import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import Button from '../ui/Button';

// Simulating a chatbot response system
const predefinedResponses: Record<string, string> = {
  'hello': 'Hello! How can I help you with your loan eligibility today?',
  'hi': 'Hi there! How can I assist you with your loan needs?',
  'loan': 'We offer various types of loans including personal, home, education, and business loans. Which one are you interested in?',
  'eligibility': 'Loan eligibility typically depends on factors like your income, credit score, employment status, and existing debt. Would you like to check your eligibility?',
  'documents': 'For most loans, you\'ll need ID proof, address proof, income proof, and sometimes collateral documents. The exact requirements vary by loan type.',
  'interest': 'Our interest rates vary depending on the loan type and your credit profile. They currently range from 7% to 14% per annum.',
  'process': 'Our loan process is simple: 1) Check eligibility, 2) Apply with required documents, 3) Verification, 4) Approval and disbursement.',
  'time': 'Once your application is complete, approval typically takes 2-5 business days, with disbursement within 24 hours after approval.',
  'contact': 'You can reach our support team at contact@nidhisakhi.com or call us at +91 1234567890.',
};

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I\'m your NidhiSakhi Loan Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const generateResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Check for keywords in predefined responses
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerCaseMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Default response if no keywords match
    return "I'm not sure I understand. Could you please rephrase your question about loans or eligibility?";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 z-50"
        aria-label="Open chatbot"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chatbot panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-primary-700 text-white p-4 flex justify-between items-center">
              <h3 className="font-medium">Loan Assistant</h3>
              <button 
                onClick={toggleChatbot}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Messages container */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary-100 text-primary-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input area */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <Button 
                  onClick={handleSendMessage} 
                  variant="primary"
                  className="p-2"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;