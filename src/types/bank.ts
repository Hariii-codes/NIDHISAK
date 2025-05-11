export enum LoanType {
  HOME = 'home',
  PERSONAL = 'personal',
  AUTO = 'auto'
}

export enum InterestType {
  FIXED = 'fixed',
  FLOATING = 'floating'
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  location: Location;
  phone: string;
  timings: string;
}

export interface Loan {
  type: LoanType;
  interestType: InterestType;
  interestRate: number;
  minPrincipal: number;
  maxPrincipal: number;
  minTenure: number;
  maxTenure: number;
  processingFee: number;
  processingFeeMin: number;
  processingFeeMax: number;
}

export interface Bank {
  id: string;
  name: string;
  loans: Loan[];
  branches: Branch[];
}