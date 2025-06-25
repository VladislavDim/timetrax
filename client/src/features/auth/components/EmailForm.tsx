import { useState } from 'react';
import type { EmailFormProps } from '../types/form.types';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { AuthFooter } from '../components/AuthFooter';
import { SubmitButton } from '../components/SubmitButton';

export function EmailForm({ onSubmit, loading, error }: EmailFormProps) {
    const [email, setEmail] = useState('');
    const [localError, setLocalError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setLocalError('Email is required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setLocalError('Email format invalid');
            return;
        }

        setLocalError('');
        onSubmit({ email });
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-white px-4 py-8">

            {/* Back button */}
            <BackButton onClick={() => navigate(-1)} />

            {/* Centered form */}
            <div className="w-full max-w-md mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        <span className="inline-flex items-center justify-center gap-1 whitespace-nowrap">
                            Welcome to Timetra
                            <img
                                src="/logo.png"
                                alt="X"
                                className="h-[1.6em] w-auto object-contain inline-block -ml-[15px]"
                            />
                        </span>
                    </h1>
                    <p className="text-lg text-gray-700 font-medium">Log in or create account</p>
                    <p className="mt-2 text-gray-500 text-sm">
                        Enter your email to continue and manage your appointments.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            placeholder="example@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 border ${localError || error
                                ? 'border-[#f97316]'
                                : 'border-[#e5e7eb]'
                                } rounded-lg text-sm focus:outline-none focus:border-[#f97316] focus:ring-0`}
                        />
                        {(localError || error) && (
                            <p className="mt-1 text-sm text-red-500 font-medium">
                                {localError || error}
                            </p>
                        )}
                    </div>

                    <SubmitButton loading={loading} type="submit" size="md" >
                        Continue
                    </SubmitButton>
                    
                </form>

                <div className="text-center mt-6">
                    <p className="text-base text-gray-600 font-semibold">Are you a business?</p>
                    <a
                        href="/business-login"
                        className="text-sm text-[#f97316] font-medium hover:text-[#ea580c] transition-colors"
                    >
                        Log in as professional
                    </a>
                </div>
            </div>

            {/* Footer */}
            <AuthFooter />

        </div>
    );
}
