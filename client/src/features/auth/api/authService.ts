import type { EmailVerificationData, RegisterData } from "../types/auth.types";

export async function registerUser(data: RegisterData) {
  const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }

  return await response.json();
}

/**
 * Mock function to simulate email verification request.
 */
export async function verifyEmail(data: EmailVerificationData) {
  console.log('Verifying email:', data.email);

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mocked success result
  return { message: 'Email verification successful.' };
}