import React, { useState, useEffect } from 'react';

// ৪.৭ রেটিংয়ের জন্য কাস্টম স্টার কম্পোনেন্ট (৪টি পূর্ণ + ১টি অর্ধেক তারা)
const StarRating = ({ size = 16 }) => {
  return (
    <div className="inline-flex items-center gap-1">
      {[1, 2, 3, 4].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="#E5A91A"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {/* ৫ম তারা (অর্ধেক ভরাট + আউটলাইন) */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="halfStarGrad">
            <stop offset="55%" stopColor="#E5A91A" />
            <stop offset="55%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          fill="url(#halfStarGrad)"
          stroke="#E5A91A"
          strokeWidth="1.4"
        />
      </svg>
    </div>
  );
};

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#ECEEE9] w-[310px] sm:w-[350px] shrink-0 flex flex-col justify-between hover:shadow-md transition-all duration-300">
    <div>
      {/* Review Title */}
      <h3 className="font-serif text-[20px] text-[#111111] font-normal leading-snug mb-2">
        {review.title}
      </h3>

      {/* Rating & Stars */}
      <div className="flex items-center gap-2 mb-3.5">
        <span className="text-[13px] font-medium text-[#18392B]">
          {review.rating}
        </span>
        <StarRating size={14} />
      </div>

      {/* Review Text */}
      <p className="text-[12px] text-[#7D827E] leading-relaxed mb-5">
        {review.comment}
      </p>
    </div>

    {/* Guest Avatar & Name */}
    <div className="flex items-center gap-2.5">
      <img
        src={review.avatar}
        onError={(e) => {
          e.currentTarget.src = '/images/deluxe-room.png';
        }}
        alt={review.guestName}
        className="w-7 h-7 rounded-md object-cover bg-[#D97757]"
      />
      <span className="text-[12px] font-medium text-[#111111]">
        {review.guestName}
      </span>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error('Failed to load testimonials:', err));
  }, []);

  const rowOneReviews = reviews.filter((item) => item.row === 1);
  const rowTwoReviews = reviews.filter((item) => item.row === 2);

  return (
    <section className="bg-[#F7F8F3] py-20 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-14">
        <p className="text-[#666666] text-sm md:text-base font-normal mb-2">
          Guest Experiences
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#18392B] font-normal leading-tight mb-4">
          Stories From Our Happy Guests
        </h2>
        <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed mb-6">
          Discover what our guests have to say about their experiences at Hotel Prince. Their kind
          words inspire us to deliver exceptional hospitality and unforgettable stays.
        </p>

        {/* Overall 4.7 Rating Badge */}
        <div className="flex items-center justify-center gap-2.5">
          <span className="text-[18px] font-medium text-[#18392B]">4.7</span>
          <StarRating size={20} />
        </div>
      </div>

      {/* Balanced Staggered 2-Row Cards Layout */}
      <div className="flex flex-col gap-6 items-center">
        {/* Row 1 */}
        <div className="flex items-stretch justify-center gap-6">
          {rowOneReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex items-stretch justify-center gap-6 translate-x-20 md:translate-x-28">
          {rowTwoReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;