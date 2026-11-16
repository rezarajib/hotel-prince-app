import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../../components/common/InputField';
import AuthLayout from '../../../features/auth/AuthLayout';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', phone: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // সব ইনপুট ফিল্ডের লিস্ট
  const fields = [
    { name: 'email', label: 'Email*', type: 'email', placeholder: 'Enter your email address...' },
    { name: 'phone', label: 'Phone Number*', type: 'tel', placeholder: 'Enter your phone Number...' },
    { name: 'password', label: 'Password*', type: 'password', placeholder: 'Enter your password...' },
    { name: 'confirmPassword', label: 'Confirm Password*', type: 'password', placeholder: 'Enter your password...' },
  ];

  // একটি ফাংশন দিয়েই সব ইনপুটের ভ্যালু আপডেট হবে
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    navigate('/login');
  };

  return (
    <AuthLayout backTo="/login">
          <h1 className="text-2xl font-semibold text-[#111]">Create An Account</h1>
          <p className="mt-1 text-xs text-[#777]">Create an account and stay at Hotel Prince.</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
          {fields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}

          {error && <p role="alert" className="text-xs text-red-600">{error}</p>}

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-[#18392B] hover:bg-[#122b20] py-3 text-sm font-medium text-white transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3 text-xs text-[#999]">
          <span className="h-px flex-1 bg-[#EAEAEA]" />
          Or
          <span className="h-px flex-1 bg-[#EAEAEA]" />
        </div>

        {/* Login Link */}
        <p className="text-center text-xs text-[#666]">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-[#18392B] hover:underline">
            Log In
          </Link>
        </p>
    </AuthLayout>
  );
};

export default SignUp;