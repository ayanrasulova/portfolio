import React from "react";

const BuzzEffect: React.FC = () => {
  const spanClones = Array.from({ length: 4 }, (_, i) => (
    <span key={`clone-span-${i}`}>Buzz</span> // Adjust content as needed
  ));

  const scanlines = Array.from({ length: 10 }, (_, i) => (
    <div key={`scanline-${i}`} className="scanline"></div>
  ));

  return (
    <div className="buzz_wrapper">
      <div className="text">
        {/* Original span */}
        <span>Buzz</span>

        {/* Prepend cloned spans */}
        {spanClones}
      </div>

      {/* Append cloned scanlines */}
      {scanlines}
    </div>
  );
};

export default BuzzEffect;
