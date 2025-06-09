import type { EmailVerificationData, RegisterData } from "./auth.types";

export type EmailFormProps = {
  onSubmit: (data: EmailVerificationData) => void;
  loading?: boolean;
  error?: string;
};

export type RegisterFormProps = {
  onSubmit: (data: RegisterData) => void;
  loading?: boolean;
  error?: string;
  onBack?: () => void;
};