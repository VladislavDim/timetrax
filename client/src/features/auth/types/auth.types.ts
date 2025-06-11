export type EmailVerificationData = {
  email: string;
};

export type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  countryCode: string;
  terms: boolean;
  marketing: boolean;
};