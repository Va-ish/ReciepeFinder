import React from "react";
import Chef from "../assets/images/genie2 (1).png";

const Suggestions = () => {
  
  return (
    <div className="flex items-center justify-center pt-8 px-4 sm:px-6">
      <div className="flex items-center relative">
        <div className="mr-4 bg-primary italic text-white rounded-lg p-4 sm:p-6 max-w-xs shadow-lg">
          <p>✨ Let’s cook up some magic with these delightful recipes! 🍳🍴</p>
        </div>
        <img
          src={Chef}
          alt="Chef Marco"
          className="rounded-full w-32 h-32 border-2 bg-sky-200 border-black object-contain"
        />
      </div>
    </div>
  );
};

export default Suggestions;
