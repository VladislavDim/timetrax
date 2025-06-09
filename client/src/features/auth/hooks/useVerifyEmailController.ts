import { useState, useCallback } from 'react';
import { verifyEmail } from '../api/authService';
import type { EmailVerificationData } from '../types/auth.types';

/**
 * Custom hook for handling email verification before registration.
 */
export function useVerifyEmailController() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerifyEmail = useCallback(
    async (formData: EmailVerificationData): Promise<boolean> => {
      setError('');
      setSuccess('');

      if (!formData.email.includes('@')) {
        setError('Invalid email format.');
        return false;
      }

      try {
        setLoading(true);
        await verifyEmail(formData);
        setSuccess('Email verified successfully!');
        return true;

      } catch (err: unknown) {

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong.');
        }

        return false;

      } finally {
        setLoading(false);
      }
    }, []);

  return {
    handleVerifyEmail,
    error,
    success,
    loading,
  };
}
