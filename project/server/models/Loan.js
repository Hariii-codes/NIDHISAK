import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  loanType: {
    type: String,
    required: true,
    enum: ['personal', 'home', 'business', 'education', 'car']
  },
  amount: {
    type: Number,
    required: true
  },
  interestRate: {
    type: Number,
    required: true
  },
  tenure: {
    type: Number, // in months
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'approved', 'rejected', 'disbursed', 'closed'],
    default: 'pending'
  },
  monthlyIncome: {
    type: Number,
    required: true
  },
  employmentType: {
    type: String,
    required: true,
    enum: ['salaried', 'self-employed', 'business']
  },
  employmentDuration: {
    type: Number, // in years
    required: true
  },
  existingEmi: {
    type: Number,
    default: 0
  },
  creditScore: {
    type: Number,
    required: true
  },
  documents: [{
    type: String, // document URLs
  }],
  rejectionReason: {
    type: String
  },
  applicationDate: {
    type: Date,
    default: Date.now
  },
  approvalDate: {
    type: Date
  },
  disbursementDate: {
    type: Date
  }
}, { timestamps: true });

const Loan = mongoose.model('Loan', LoanSchema);

export default Loan;