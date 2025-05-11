import { Bank, LoanType, InterestType } from '../types/bank';

export const banks: Bank[] = [
  {
    id: 'sbi',
    name: 'State Bank of India',
    loans: [
      {
        type: LoanType.HOME,
        interestType: InterestType.FLOATING,
        interestRate: 8.40,
        minPrincipal: 1000000,
        maxPrincipal: 100000000,
        minTenure: 12,
        maxTenure: 360,
        processingFee: 0.35,
        processingFeeMin: 10000,
        processingFeeMax: 30000,
      },
      {
        type: LoanType.PERSONAL,
        interestType: InterestType.FIXED,
        interestRate: 10.50,
        minPrincipal: 100000,
        maxPrincipal: 2000000,
        minTenure: 12,
        maxTenure: 72,
        processingFee: 1.5,
        processingFeeMin: 5000,
        processingFeeMax: 15000,
      }
    ],
    branches: [
      {
        id: 'sbi-001',
        name: 'SBI Main Branch Mumbai',
        address: 'Nariman Point, Mumbai',
        location: { lat: 18.9220, lng: 72.8347 },
        phone: '022-12345678',
        timings: '10:00 AM - 4:00 PM',
      },
      {
        id: 'sbi-002',
        name: 'SBI Bandra Branch',
        address: 'Linking Road, Bandra West',
        location: { lat: 19.0596, lng: 72.8295 },
        phone: '022-23456789',
        timings: '10:00 AM - 4:00 PM',
      }
    ]
  },
  {
    id: 'hdfc',
    name: 'HDFC Bank',
    loans: [
      {
        type: LoanType.HOME,
        interestType: InterestType.FLOATING,
        interestRate: 8.45,
        minPrincipal: 1500000,
        maxPrincipal: 150000000,
        minTenure: 12,
        maxTenure: 360,
        processingFee: 0.50,
        processingFeeMin: 12000,
        processingFeeMax: 35000,
      },
      {
        type: LoanType.PERSONAL,
        interestType: InterestType.FIXED,
        interestRate: 10.75,
        minPrincipal: 100000,
        maxPrincipal: 2500000,
        minTenure: 12,
        maxTenure: 60,
        processingFee: 2.0,
        processingFeeMin: 5000,
        processingFeeMax: 20000,
      }
    ],
    branches: [
      {
        id: 'hdfc-001',
        name: 'HDFC Bank Fort Branch',
        address: 'Fort Area, Mumbai',
        location: { lat: 18.9317, lng: 72.8328 },
        phone: '022-34567890',
        timings: '9:30 AM - 4:30 PM',
      },
      {
        id: 'hdfc-002',
        name: 'HDFC Bank Andheri Branch',
        address: 'Andheri East, Mumbai',
        location: { lat: 19.1136, lng: 72.8697 },
        phone: '022-45678901',
        timings: '9:30 AM - 4:30 PM',
      }
    ]
  },
  {
    id: 'icici',
    name: 'ICICI Bank',
    loans: [
      {
        type: LoanType.HOME,
        interestType: InterestType.FLOATING,
        interestRate: 8.50,
        minPrincipal: 1000000,
        maxPrincipal: 120000000,
        minTenure: 12,
        maxTenure: 360,
        processingFee: 0.40,
        processingFeeMin: 10000,
        processingFeeMax: 32000,
      },
      {
        type: LoanType.PERSONAL,
        interestType: InterestType.FIXED,
        interestRate: 10.65,
        minPrincipal: 100000,
        maxPrincipal: 2200000,
        minTenure: 12,
        maxTenure: 72,
        processingFee: 1.75,
        processingFeeMin: 5000,
        processingFeeMax: 17500,
      }
    ],
    branches: [
      {
        id: 'icici-001',
        name: 'ICICI Bank BKC Branch',
        address: 'Bandra Kurla Complex, Mumbai',
        location: { lat: 19.0692, lng: 72.8697 },
        phone: '022-56789012',
        timings: '9:30 AM - 5:00 PM',
      },
      {
        id: 'icici-002',
        name: 'ICICI Bank Powai Branch',
        address: 'Powai, Mumbai',
        location: { lat: 19.1176, lng: 72.9060 },
        phone: '022-67890123',
        timings: '9:30 AM - 5:00 PM',
      }
    ]
  }
];