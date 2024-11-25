import React from 'react';
import Genie from '../assets/images/Hero.webp';

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-8xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-yellow-500 mb-6">
        Your Culinary Genie
      </h1>
      
      <h3 className="text-center w-4/5 sm:w-3/4 lg:w-1/2 text-lg text-sky-200 mb-8">
        Welcome to the magical world of flavors! Our culinary genie is here to grant your recipe wishes.
        Whether you’re craving a quick bite, exploring new tastes, or cooking for loved ones, simply share
        your ingredients, mood, and time, and watch the genie work its magic to fetch the perfect recipe for you!
      </h3>

      <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mb-6">
        <div className="absolute inset-0 bg-yellow-400 rounded-full w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md shadow-yellow-200"></div>
        
        <img src={Genie} alt="Culinary Genie" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}

export default MainPage;
