'use client';

import Link from 'next/link';
import { useState } from 'react';
import { passwordRequest } from '@directus/sdk';
import directus from '@/lib/directus';
import toast from 'react-hot-toast';

export default function RequestResetPasswordForm() {
  const [email, setEmail] = useState('');
  const reset_url = `${process.env.NEXT_PUBLIC_URL}/reset-password`;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await directus.request(passwordRequest(email, reset_url));
      toast('An email with a password reset link has been sent to your email!');
    } catch (e) {
      console.log(e);
      toast('An error occurred, please try again!');
    }
  };

  return (
    <div className="min-h-screen bg-[#FF4D1D] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">Welcome to Hello Tractor</h1>
          <h2 className="text-4xl font-bold mb-6">Reset Password</h2>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-6">

          
          <div className="space-y-2">
            <p className="text-gray-600">
              Enter your registered email and a reset password link will be sent to you
            </p>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4785]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#FF4785] hover:bg-[#FF4785]/90 text-white py-3 rounded-lg font-medium transition duration-300"
          >
            Send Reset Link
          </button>

          <div className="text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <div>
              <Link 
                href="/login" 
                className="text-[#FF4785] hover:text-[#FF4785]/90 font-medium"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

