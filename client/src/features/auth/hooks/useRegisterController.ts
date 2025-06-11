import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/authService';
import type { RegisterData } from '../types/auth.types';

/**
    * Custom hook for handling user registration.
    * @function useRegisterController
    * @description This hook manages the registration process, including form validation, error handling, and success messages.
    * @returns {Object} - Contains the registration handler, error message, success message, and loading state.
 */
export function useRegisterController() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = useCallback(async (formData: RegisterData) => {
        setError('');
        setSuccess('');

        if (!formData.email.includes('@')) {
            setError('Invalid email format.');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        try {
            setLoading(true);
            await registerUser(formData);
            setSuccess('Registration successful!');
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Something went wrong.');
            }
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    return {
        handleRegister,
        error,
        success,
        loading,
    };
}
