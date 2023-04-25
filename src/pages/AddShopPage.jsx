import React from 'react';
import backgroundImage from '../img/home_page_bg.webp';
import AddShopForm from '../components/auth/AddShopForm';

function AddShopPage() {
  const handleSubmit = () => {};

  return (
    <div className="flex flex-col justify-center items-center max-w-1200px mx-auto px-4 sm:px-6 lg:px-8 h-screen relative">
      <img
        src={backgroundImage}
        alt="home page background"
        className="rounded-bl-3xl rounded-br-3xl grayscale opacity-20 absolute top-0"
      />
      <div
        style={{ width: '30%', margin: '0 auto' }}
        className="flex-1 justify-center relative z-10"
      >
        <AddShopForm onSubmit={handleSubmit} />
        <p className="text-4xl text-primary font-big-shoulders-display font-bold tracking-wide relative top-0 z-10">
          This page is currently undergoing maintenance...
        </p>
      </div>
    </div>
  );
}

export default AddShopPage;
