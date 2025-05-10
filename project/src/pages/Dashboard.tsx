import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { FileText, Clock, CheckCircle2, X, BarChart3, CreditCard, Wallet, HelpCircle, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ChatbotWidget from '../components/chatbot/ChatbotWidget';

// Mock data for demonstration
const mockLoanApplications = [
  { 
    id: 'LA123456',
    type: 'Personal Loan',
    amount: 300000,
    status: 'approved',
    date: '2023-09-15',
    interestRate: 11.5,
    tenure: 36
  },
  { 
    id: 'LA789012',
    type: 'Home Loan',
    amount: 2500000,
    status: 'pending',
    date: '2023-10-05',
    interestRate: 8.75,
    tenure: 180
  },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle2 size={12} className="mr-1" />
            Approved
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock size={12} className="mr-1" />
            Pending
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <X size={12} className="mr-1" />
            Rejected
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-primary-700 px-6 py-12 text-white">
              <h1 className="text-2xl font-bold mb-2">
                Welcome back, {user?.name || 'User'}
              </h1>
              <p className="text-primary-100">
                Manage your loan applications and track your financial journey
              </p>
            </div>
            
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('applications')}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === 'applications'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Loan Applications
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === 'documents'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Documents
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === 'profile'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Profile
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="bg-primary-100 p-3 rounded-full mr-4">
                            <FileText className="h-6 w-6 text-primary-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Total Applications</p>
                            <p className="text-2xl font-semibold text-gray-800">2</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="bg-green-100 p-3 rounded-full mr-4">
                            <CheckCircle2 className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Approved Loans</p>
                            <p className="text-2xl font-semibold text-gray-800">1</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="bg-secondary-100 p-3 rounded-full mr-4">
                            <Wallet className="h-6 w-6 text-secondary-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Total Amount</p>
                            <p className="text-2xl font-semibold text-gray-800">₹28,00,000</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Applications</h2>
                    <div className="bg-white overflow-hidden rounded-md border border-gray-200">
                      <ul className="divide-y divide-gray-200">
                        {mockLoanApplications.map((application) => (
                          <li key={application.id} className="p-4 hover:bg-gray-50">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="bg-primary-50 p-2 rounded-md mr-4">
                                  <FileText className="h-5 w-5 text-primary-600" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800">{application.type}</p>
                                  <p className="text-sm text-gray-500">
                                    ID: {application.id} • {new Date(application.date).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-center">
                                <div className="text-right mr-4">
                                  <p className="font-medium text-gray-800">₹{application.amount.toLocaleString()}</p>
                                  <p className="text-sm text-gray-500">{application.tenure} months</p>
                                </div>
                                {renderStatusBadge(application.status)}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary-50 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold text-primary-800 mb-1">
                          Need financial guidance?
                        </h3>
                        <p className="text-primary-600">
                          Our loan experts can help you find the right financial solution.
                        </p>
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="primary">
                          Apply for a Loan
                        </Button>
                        <Button variant="outline">
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'applications' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">All Loan Applications</h2>
                    <Button variant="primary" size="sm">
                      New Application
                    </Button>
                  </div>
                  
                  <div className="bg-white overflow-hidden rounded-md border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Application ID
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Loan Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {mockLoanApplications.map((application) => (
                          <tr key={application.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {application.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {application.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ₹{application.amount.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(application.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {renderStatusBadge(application.status)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-primary-600 hover:text-primary-800">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {activeTab === 'documents' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">Your Documents</h2>
                    <Button variant="primary" size="sm">
                      Upload New
                    </Button>
                  </div>
                  
                  <div className="bg-white overflow-hidden rounded-md border border-gray-200 mb-6">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="text-sm font-medium text-gray-700">Personal Documents</h3>
                    </div>
                    <ul className="divide-y divide-gray-200">
                      <li className="p-4 hover:bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-primary-50 p-2 rounded-md mr-4">
                            <FileText className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">ID Proof (Aadhaar)</p>
                            <p className="text-sm text-gray-500">Uploaded on 10 Aug 2023</p>
                          </div>
                        </div>
                        <div>
                          <Button variant="text" size="sm" rightIcon={<Download size={16} />}>
                            Download
                          </Button>
                        </div>
                      </li>
                      <li className="p-4 hover:bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-primary-50 p-2 rounded-md mr-4">
                            <FileText className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">PAN Card</p>
                            <p className="text-sm text-gray-500">Uploaded on 10 Aug 2023</p>
                          </div>
                        </div>
                        <div>
                          <Button variant="text" size="sm" rightIcon={<Download size={16} />}>
                            Download
                          </Button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white overflow-hidden rounded-md border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="text-sm font-medium text-gray-700">Income Documents</h3>
                    </div>
                    <ul className="divide-y divide-gray-200">
                      <li className="p-4 hover:bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-primary-50 p-2 rounded-md mr-4">
                            <FileText className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">Bank Statements (6 months)</p>
                            <p className="text-sm text-gray-500">Uploaded on 12 Aug 2023</p>
                          </div>
                        </div>
                        <div>
                          <Button variant="text" size="sm" rightIcon={<Download size={16} />}>
                            Download
                          </Button>
                        </div>
                      </li>
                      <li className="p-4 hover:bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-primary-50 p-2 rounded-md mr-4">
                            <FileText className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">Salary Slips (3 months)</p>
                            <p className="text-sm text-gray-500">Uploaded on 12 Aug 2023</p>
                          </div>
                        </div>
                        <div>
                          <Button variant="text" size="sm" rightIcon={<Download size={16} />}>
                            Download
                          </Button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-6">User Profile</h2>
                  
                  <div className="bg-white overflow-hidden rounded-md border border-gray-200 mb-6">
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            defaultValue={user?.name || ''}
                            readOnly
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            defaultValue={user?.email || ''}
                            readOnly
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            defaultValue="+91 98765 43210"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            defaultValue="1985-05-15"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button variant="primary">
                          Update Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white overflow-hidden rounded-md border border-gray-200">
                    <div className="p-6">
                      <h3 className="text-md font-semibold text-gray-800 mb-4">
                        Security Settings
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter current password"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter new password"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Confirm new password"
                          />
                        </div>
                        
                        <div className="mt-2">
                          <Button variant="primary">
                            Change Password
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      
      <ChatbotWidget />
    </div>
  );
};

export default Dashboard;