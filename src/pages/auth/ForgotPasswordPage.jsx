import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/common/InputField';
import AuthLayout from '../../features/auth/AuthLayout';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/verify-code');
  };

  return (
    <AuthLayout backTo="/login">
      <h1 className="text-2xl font-semibold text-[#111]">Forgot Password</h1>
      <p className="mt-1 text-xs leading-relaxed text-[#777]">
        Enter the email address we&apos;ll send you a verification code to reset your password.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
        <InputField
          name="email"
          label="Email*"
          type="email"
          placeholder="Enter your email address..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-[#18392B] py-3 text-sm font-medium text-white transition hover:bg-[#122b20]"
        >
          Send Verification Code
        </button>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;