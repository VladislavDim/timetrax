import { useState } from 'react';
import { EmailForm } from '../components/EmailForm';
import { UserRegisterForm } from '../components/UserRegisterForm';
import { useVerifyEmailController } from '../hooks/useVerifyEmailController';
import { useRegisterController } from '../hooks/useRegisterController';
import authPhoto from '../../../assets/authPhoto.png';

export function RegisterFlowPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');

  const {
    handleVerifyEmail,
    error: verifyError,
    loading: verifyLoading,
  } = useVerifyEmailController();

  const {
    handleRegister,
    error: registerError,
    loading: registerLoading,
  } = useRegisterController();

  const handleEmailSubmit = async ({ email }: { email: string }) => {
    const success = await handleVerifyEmail({ email });
    if (success) {
      setEmail(email);
      setStep(2);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left side - forms */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-md">
          {step === 1 && (
            <EmailForm
              onSubmit={handleEmailSubmit}
              loading={verifyLoading}
              error={verifyError}
            />
          )}
          {step === 2 && (
            <UserRegisterForm
              onSubmit={(data) => handleRegister({ ...data, email })}
              loading={registerLoading}
              error={registerError}
              onBack={() => setStep(1)}
            />
          )}
        </div>
      </div>

      {/* Right side - image */}
      <div className="hidden md:block w-1/2 h-full">
        <img
          src={authPhoto}
          alt="authPhoto"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  );
}
