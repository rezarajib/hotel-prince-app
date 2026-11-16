import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../features/auth/AuthLayout';

const VerificationCodePage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(Array(6).fill(''));
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    setCode((current) => current.map((item, itemIndex) => (itemIndex === index ? digit : item)));
    if (digit && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const resendCode = () => {
    setCode(Array(6).fill(''));
    inputs.current[0]?.focus();
  };

  return (
    <AuthLayout backTo="/forgot-password">
      <h1 className="text-2xl font-semibold text-[#111]">Verification Code</h1>
      <p className="mt-1 text-xs text-[#777]">We&apos;ve send a code to hello@gmail.com</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate('/new-password');
        }}
        className="mt-6"
      >
        <div className="flex justify-center gap-2 sm:gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(element) => { inputs.current[index] = element; }}
              type="text"
              inputMode="numeric"
              autoComplete={index === 0 ? 'one-time-code' : 'off'}
              aria-label={`Verification digit ${index + 1}`}
              maxLength={1}
              value={digit}
              onChange={(event) => handleChange(index, event.target.value)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              className="h-12 w-10 rounded-lg border border-[#E5E5E5] text-center text-lg text-[#111] outline-none focus:border-[#18392B] sm:w-12"
            />
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-[#777]">
          Don&apos;t get code?{' '}
          <button type="button" onClick={resendCode} className="cursor-pointer font-semibold text-[#18392B] hover:underline">
            Click to resend
          </button>
        </p>
        <button
          type="submit"
          className="mt-6 w-full cursor-pointer rounded-lg bg-[#18392B] py-3 text-sm font-medium text-white transition hover:bg-[#122b20]"
        >
          Send Verification Code
        </button>
      </form>
    </AuthLayout>
  );
};

export default VerificationCodePage;
