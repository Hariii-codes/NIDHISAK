export const calculateEMI = (principal: number, interestRate: number, tenure: number): number => {
  const monthlyRate = (interestRate / 12) / 100;
  const totalMonths = tenure;
  
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
              (Math.pow(1 + monthlyRate, totalMonths) - 1);
  
  return Math.round(emi);
};

export const calculateTotalAmount = (emi: number, tenure: number): number => {
  return emi * tenure;
};

export const calculateTotalInterest = (totalAmount: number, principal: number): number => {
  return totalAmount - principal;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const calculateProcessingFee = (
  principal: number,
  percentageFee: number,
  minFee: number,
  maxFee: number
): number => {
  const fee = (principal * percentageFee) / 100;
  return Math.min(Math.max(fee, minFee), maxFee);
};