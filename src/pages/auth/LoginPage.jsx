
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../components/common/InputField';
import { AuthContext } from '../../features/auth/AuthContext';
import AuthLayout from '../../features/auth/AuthLayout';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ identifier: '', password: '' });

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ name: 'Md. Rayhan', email: 'rayhan@hotelprince.com' });
    navigate('/my-bookings');
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-semibold text-[#111]">Welcome Back</h1>
      <p className="mt-1 text-xs text-[#777]">Enter your credential to access your account</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
        <InputField
          name="identifier"
          label="Email Or Phone*"
          type="text"
          placeholder="Enter your email or phone number..."
          value={formData.identifier}
          onChange={handleChange}
        />
        <div className="text-right">
          <Link to="/forgot-password" className="text-xs font-medium text-[#18392B] hover:underline">
            Forgot Password?
          </Link>
        </div>
        <InputField
          name="password"
          label="Password*"
          type="password"
          placeholder="Enter your password..."
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-2 w-full cursor-pointer rounded-lg bg-[#18392B] py-3 text-sm font-medium text-white transition hover:bg-[#122b20]"
        >
          Log In
        </button>
      </form>

      <div className="my-5 flex items-center gap-3 text-xs text-[#999]">
        <span className="h-px flex-1 bg-[#EAEAEA]" />
        Or
        <span className="h-px flex-1 bg-[#EAEAEA]" />
      </div>
      <p className="text-center text-xs text-[#666]">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="font-semibold text-[#18392B] hover:underline">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
