import React from 'react';
import NotFoundAnimation from './components/NotFoundAnimation';
import SuggestedLinks from './components/SuggestedLinks';

const NotFound = () => {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-gray-50/50">
      <NotFoundAnimation />
      <SuggestedLinks />
    </main>
  );
};

export default NotFound;