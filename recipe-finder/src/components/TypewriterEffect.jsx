import React, { useState } from "react";
import Typical from "react-typical";

const TypingEffect = ({ lines }) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <div className="typewriter max-w-lg mx-auto">
      {!isTypingComplete ? (
        <Typical
          steps={lines.flatMap((line) => [line, 1000])}
          wrapper="p"
          loop={1}
          onFinished={() => setIsTypingComplete(true)}
        />
      ) : (
        lines.map((line, idx) => (
          <p key={idx} className="mt-1">
            {line}
          </p>
        ))
      )}
    </div>
  );
};

export default TypingEffect;
