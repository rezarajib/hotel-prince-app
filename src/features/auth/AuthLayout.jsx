import { Building2, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthLayout = ({ children, backTo = '/' }) => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_#f2f7f4_0%,_#cbe4d8_52%,_#94c9b2_100%)] p-4">
      <section className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <button
          type="button"
          onClick={() => navigate(backTo)}
          aria-label="Go back"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-[#F5F5F0] text-[#333] hover:bg-gray-200"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="mb-6 mt-2 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#18392B] text-white">
            <Building2 className="h-6 w-6" />
          </div>
          {children}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
