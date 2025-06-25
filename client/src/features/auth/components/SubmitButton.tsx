import React from 'react';
import clsx from 'clsx';

type SubmitButtonProps = {
  loading?: boolean;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  type?: 'submit' | 'button';
  disabled?: boolean;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading = false,
  children = 'Continue',
  size = 'md',
  type = 'submit',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'py-2 text-xs',
    md: 'py-3 text-sm',
    lg: 'py-4 text-base',
  };

  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={clsx(
        'w-full text-orange-700 font-semibold rounded-lg bg-white border-2 border-orange-500',
        'hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:via-orange-500 hover:to-orange-600',
        'hover:shadow-md transition-all duration-200 ease-in-out disabled:opacity-50',
        sizeClasses[size]
      )}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
