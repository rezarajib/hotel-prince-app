import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white">
      {/* Contact Hero & Enquiry Form Section */}
      <section className="bg-[#F4F5EE] pt-28 pb-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#666] text-xs md:text-sm mb-2">Hotel Prince</p>
          <h1 className="font-serif text-4xl md:text-[56px] text-[#18392B] leading-tight mb-3">
            Contact Us
          </h1>
          <p className="text-[#666] text-xs md:text-sm max-w-md mx-auto leading-relaxed mb-12">
            Our hotel address and contact details are being finalized. For this private preview, leave an enquiry for the hotel team.
          </p>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#ECEEE9] text-left space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">
                  Restaurant Type
                </label>
                <input
                  type="text"
                  required
                  placeholder="Choose restaurant type"
                  className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#888] outline-none focus:ring-1 focus:ring-[#18392B]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111] mb-2">
                  Select Item
                </label>
                <input
                  type="text"
                  required
                  placeholder="Choose item"
                  className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#888] outline-none focus:ring-1 focus:ring-[#18392B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111] mb-2">
                Restaurant Type
              </label>
              <textarea
                rows="5"
                required
                placeholder="Choose restaurant type"
                className="w-full bg-[#F2F2F2] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#888] outline-none resize-none focus:ring-1 focus:ring-[#18392B]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#18392B] hover:bg-[#122b20] text-white text-sm md:text-[15px] font-medium py-3.5 rounded-lg transition cursor-pointer"
            >
              {submitted ? 'Enquiry Sent Successfully!' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </section>

      {/* Newsletter / Stay in Touch Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-[36px] text-[#111] mb-3">
              Let’s stay in touch!
            </h2>
            <p className="text-xs md:text-sm text-[#666] leading-relaxed">
              Have a question, planning a visit, or need assistance with your booking? We’re always happy to help. Reach out to us, and let us make your experience at Hotel Prince truly special.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto items-center gap-2.5"
          >
            <input
              type="email"
              required
              placeholder="Enter your email..."
              className="w-full md:w-64 bg-[#F4F5EE] border border-[#E5E6DF] rounded-lg px-4 py-3 text-sm text-[#333] placeholder-[#888] outline-none focus:border-[#18392B]"
            />
            <button
              type="submit"
              className="bg-[#18392B] hover:bg-[#122b20] text-white text-sm font-medium px-6 py-3 rounded-lg transition shrink-0 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;