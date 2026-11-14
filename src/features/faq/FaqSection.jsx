import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchFaqs = async () => {
  const response = await fetch('/data/faqs.json');
  if (!response.ok) {
    throw new Error('Failed to load FAQs');
  }
  return response.json();
};

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const {
    data: faqs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['faqs'],
    queryFn: fetchFaqs,
  });

  const toggleFaq = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[#7D827E] text-xs md:text-sm font-normal mb-2">
            Got Questions?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-[#18392B] font-normal leading-tight mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-[#7D827E] text-xs md:text-[14px] leading-relaxed">
            Find answers to common questions about your stay, bookings, facilities,
            <br className="hidden sm:inline" /> and experiences at Hotel Prince.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-16 bg-[#F7F8F3] animate-pulse rounded-lg"
              />
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <p className="text-center text-red-500 text-sm">
            Unable to load questions right now. Please try again later.
          </p>
        )}

        {/* FAQ Accordion List */}
        {!isLoading && !isError && (
          <div className="divide-y divide-[#E6E8E3]">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div key={faq.id} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                  >
                    {/* Question Text */}
                    <span className="font-serif text-[18px] md:text-[21px] text-[#111111] font-normal leading-snug group-hover:text-[#18392B] transition-colors">
                      {faq.question}
                    </span>

                    {/* Circular Chevron Icon Button */}
                    <span
                      className={`w-8 h-8 rounded-full border border-[#18392B] flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#18392B] text-white rotate-180'
                          : 'bg-transparent text-[#18392B] group-hover:bg-[#18392B]/5'
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 5.25L7 8.75L10.5 5.25"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 mt-3'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[13px] md:text-[14px] text-[#666666] leading-relaxed pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default FaqSection;