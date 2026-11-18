

const NotFoundAnimation = () => {
  return (
    <div className="text-center max-w-lg mx-auto">
      {/* 404 Badge & Title */}
      <div className="relative inline-block">
        <h1 className="text-8xl sm:text-9xl font-extrabold tracking-widest text-amber-600/20 select-none">
          404
        </h1>
        <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl font-bold text-gray-800">
          404 Error
        </span>
      </div>

      {/* Main Message */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
        Sorry, the page or room you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
    </div>
  );
};

export default NotFoundAnimation;