import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import type { RegisterFormProps } from '../types/form.types';
import PhoneInput from 'react-phone-input-2';
import { AuthFooter } from '../components/AuthFooter';
import { BackButton } from '../components/BackButton';
import { SubmitButton } from '../components/SubmitButton';

export function UserRegisterForm({ onSubmit, loading, error, onBack }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    countryCode: '+359',
    acceptedTerms: false,
    marketing: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white px-4 py-8">
      {/* Back button */}
      <BackButton onClick={onBack} />

      {/* Form */}
      <div className="w-full max-w-md mx-auto space-y-6 pt-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Create account</h1>
          <p className="text-sm text-gray-600 mt-1">
            You're almost there! Complete these details to create your new account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="firstName"
            placeholder="First name *"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
          />

          <input
            name="lastName"
            placeholder="Last name *"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
          />

          <div className="relative">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password *"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-10 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-3 text-gray-500 hover:text-orange-600"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex gap-2">
            <PhoneInput
              country={'bg'}
              value={formData.phone}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, phone: value }))
              }
              inputClass="!w-full !pl-12 !pr-4 !py-3 !text-sm !border !border-[#e5e7eb] !rounded-lg focus:!ring-1 focus:!ring-orange-500 focus:!outline-none"
              buttonClass="!border-[#e5e7eb]"
              dropdownClass="!text-sm"
              enableSearch
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="mt-1 accent-orange-500"
              />
              <span>
                I agree to the{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                  Privacy Policy, Terms of Use
                </a>{' '}
                and Terms of Service
              </span>
            </label>

            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                name="marketing"
                checked={formData.marketing}
                onChange={handleChange}
                className="mt-1 accent-orange-500"
              />
              <span>
                I agree to receive marketing notifications with offers and news
              </span>
            </label>
          </div>

          <SubmitButton loading={loading} type="submit" size="md" >
            Continue
          </SubmitButton>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        </form>
      </div>

      {/* Footer */}
      <AuthFooter />

    </div>
  );
}
