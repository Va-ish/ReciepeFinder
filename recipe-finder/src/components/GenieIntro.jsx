import React from "react";
import SophieImg from "../assets/images/genie1 (2).png";
import TypingEffect from "./TypewriterEffect";

const GenieIntro = () => {
  const genieLines = [
    "Let me jot that down on my magic notepad! Share your wishes, and I’ll fetch the recipes you need."
   
  ];

  return (
    <div className="flex items-center justify-center mt-12 sm:px-6">
      <div className="flex items-center relative">
        <img
          src={SophieImg}
          alt="Sophie"
          className="rounded-full w-32 h-32 border-2 bg-sky-200 border-black object-contain pt-3"
        />
        <div className="ml-4 italic bg-primary text-base text-white rounded-lg p-4 max-w-xs shadow-lg">
          <TypingEffect lines={genieLines} />
        </div>
      </div>
    </div>
  );
};

export default GenieIntro;
