import React from 'react';
import backgroundImage from '../img/home_page_bg.webp';

function ShopsPage() {
  return (
    <div className="flex flex-col justify-center items-center max-w-1200px mx-auto sm:px-6 lg:px-8 h-screen relative">
      <p className="text-4xl text-primary font-big-shoulders-display font-bold tracking-wide relative top-72 z-10">
        This page is currently undergoing maintenance...
      </p>
      <img
        src={backgroundImage}
        alt="home page background"
        className="rounded-bl-3xl rounded-br-3xl grayscale absolute top-0"
      />
    </div>
  );
}

export default ShopsPage;
