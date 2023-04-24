import React from 'react';
import backgroundImage from '../img/home_page_bg.webp';

function ShopsPage() {
  return (
    <div className="flex justify-center items-center max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
      <img
        src={backgroundImage}
        alt="home page background"
        className="rounded-bl-3xl rounded-br-3xl grayscale opacity-20"
      />
    </div>
  );
}

export default ShopsPage;
