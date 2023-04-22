import React from 'react';
import backgroundImage from '../img/home_page_bg.webp';

function HomePage() {
  return (
    <div className="flex justify-center items-start h-screen">
      <p className=" text-primary font-big-shoulders-display text-xl font-bold tracking-wide leading-normal m-5">
        <span className="text-3xl font-big-shoulders-stencil-display mr-1">
          Unfinished Cars Market
        </span>
        is the ultimate destination for car enthusiasts who love to take on
        <span className="text-2xl font-big-shoulders-stencil-display ml-1">
          unfinished car projects
        </span>
        . Our online marketplace is the perfect place to find your next car
        project, whether you are into retro cars, race cars, rusted one, crashed
        cars and even motorcycles. Most important is it should{' '}
        <span className="text-2xl font-big-shoulders-stencil-display">
          not be Finished!
        </span>{' '}
        Our platform connects you with a wide range of{' '}
        <span className="text-2xl font-big-shoulders-stencil-display">
          unfinished car projects
        </span>{' '}
        that suit your preferences and budget. Whether you are looking for a
        project that just needs a little bit of work or a complete{' '}
        <span className="text-2xl font-big-shoulders-stencil-display">
          restoration project
        </span>
        , we will got you covered. And if you are looking to{' '}
        <span className="text-2xl font-big-shoulders-stencil-display">
          sell
        </span>{' '}
        your own{' '}
        <span className="text-2xl font-big-shoulders-stencil-display">
          unfinished car project
        </span>
        , our platform makes it easy to connect with buyers who are just as
        passionate about car projects as you are!{' '}
        <span className="text-2xl font-big-shoulders-stencil-display">
          Join
        </span>{' '}
        our community of car enthusiasts and start browsing our selection of
        projects today. With{' '}
        <span className="text-2xl font-big-shoulders-stencil-display">
          Unfinished Cars Market
        </span>
        , your next great car project is just a{' '}
        <span className="text-2xl font-big-shoulders-stencil-display">
          click
        </span>{' '}
        away!
      </p>
      <img
        src={backgroundImage}
        alt="home page background"
        className="rounded-bl-3xl rounded-br-3xl grayscale opacity-20"
      />
    </div>
  );
}

export default HomePage;
