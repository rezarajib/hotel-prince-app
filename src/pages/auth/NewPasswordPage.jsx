import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/common/InputField';
import AuthLayout from '../../features/auth/AuthLayout';

const NewPasswordPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    navigate('/login');
  };

  return (
    <AuthLayout backTo="/verify-code">
      <h1 className="text-2xl font-semibold text-[#111]">Create New Password</h1>
      <p className="mt-1 text-xs text-[#777]">Choose a strong password for account safety.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
        <InputField
          name="password"
          label="New Password*"
          type="password"
          placeholder="Enter your new password..."
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          name="confirmPassword"
          label="Confirm Password*"
          type="password"
          placeholder="Confirm your new password..."
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error && <p role="alert" className="text-xs text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-[#18392B] py-3 text-sm font-medium text-white transition hover:bg-[#122b20]"
        >
          Reset Password
        </button>
      </form>
    </AuthLayout>
  );
};

export default NewPasswordPage;
