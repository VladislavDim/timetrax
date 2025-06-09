import { useState } from 'react';
import type { EmailFormProps } from '../types/form.types';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, MessageCircle } from 'lucide-react';

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
            <div className="mb-6 max-w-md w-full mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 p-3 rounded-md transition
             hover:bg-[#ede9fe] group"
                    aria-label="Go back"
                >
                    <ArrowLeft className="w-6 h-6 text-black transition-colors duration-200 group-hover:text-[#7c3aed]" />
                </button>
            </div>

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
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 border ${localError || error
                                ? 'border-[#f97316]'
                                : 'border-[#e5e7eb]'
                                } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]`}
                        />
                        {(localError || error) && (
                            <p className="mt-1 text-sm text-[#f97316] font-medium">
                                {localError || error}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full text-[#7c3aed] text-sm font-medium py-3 rounded-lg
                                   bg-white border-2 border-[#8b5cf6]
                                   hover:text-white
                                   hover:bg-gradient-to-r hover:from-[#8b5cf6] hover:via-[#7c3aed] hover:to-[#6d28d9]
                                   transition-all duration-200 ease-in-out
                                   disabled:opacity-50"
                    >
                        {loading ? 'Loading...' : 'Continue'}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-base text-gray-600 font-semibold">Are you a business?</p>
                    <a
                        href="/business-login"
                        className="text-sm text-[#8b5cf6] font-medium hover:text-[#7c3aed] transition-colors"
                    >
                        Log in as professional
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-center gap-8 text-sm text-[#7c3aed]">
                <button className="flex items-center gap-1 transition-all duration-200 hover:text-[#5b21b6] group">
                    <Globe className="w-4 h-4 transition-transform duration-200 group-hover:scale-130" />
                    <span className="transition-all">English</span>
                </button>
                <button className="flex items-center gap-1 transition-all duration-200 hover:text-[#5b21b6] group">
                    <MessageCircle className="w-4 h-4 transition-transform duration-200 group-hover:scale-130" />
                    <span className="transition-all">Support</span>
                </button>
            </div>
        </div>
    );
}
