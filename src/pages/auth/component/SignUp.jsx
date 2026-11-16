import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Building2 } from 'lucide-react';
import InputField from '../../../components/common/InputField';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', phone: '', password: '', confirmPassword: '' });

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
      return alert('Passwords do not match!');
    }
    console.log('Form Data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#F2F7F4] via-[#CBE4D8] to-[#94C9B2] p-4">
      {/* White Card */}
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5F5F0] text-[#333] hover:bg-gray-200 cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Top Icon & Title */}
        <div className="mt-2 mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#18392B] text-white">
            <Building2 className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-semibold text-[#111]">Create An Account</h1>
          <p className="mt-1 text-xs text-[#777]">Create an account and stay at Hotel Prince.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}

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
      </div>
    </div>
  );
};

export default SignUp;