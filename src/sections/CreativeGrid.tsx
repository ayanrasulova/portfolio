import { useState, type FC } from "react";

// image imports 

import fitz from "../assets/creativeworkimages/singleusefitzshow.jpg"
import valentines from "../assets/creativeworkimages/valentines2026green.jpg"
import indie1 from "../assets/creativeworkimages/indieheadsimg.jpg"
import indie2 from "../assets/creativeworkimages/indieheads2.jpg"
import indiecake from "../assets/creativeworkimages/indieheadscakeonlawn.jpg"
import silenthill from "../assets/creativeworkimages/silenthill.jpg"
import v2 from "../assets/creativeworkimages/v2.jpg" 

type Panel = {
  image: string;
};

const panels: Panel[] = [
  { image: fitz },
  { image: valentines },
  { image: indie1 },
  { image: indie2 },
  { image: indiecake },
  { image: silenthill },
  { image: v2 },
];

const CreativeGrid: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  return (
    <main className="w-screen h-screen overflow-hidden flex items-center justify-center">
      {/* mobile view (vertical) */}
      <div className="md:hidden flex flex-col w-full h-[80vh] gap-2 items-center justify-center z-10 mx-auto my-auto">
        {panels.map((panel, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-full rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${
              expandedIndex === index ? "h-full" : "h-[10%]"
            } min-h-[40px] block`}
          >
            <img loading="lazy" src={panel.image} alt={`panel-${index}`} className="w-full h-full object-cover object-top" />
          </div>
        ))}
      </div>

      {/* desktop view (horizontal ) */}
      <div className="hidden md:flex flex-row max-w-7xl h-[80vh] gap-2 items-center justify-center z-10 mx-auto my-auto">
        {panels.map((panel, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`h-full rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${
              expandedIndex === index ? "w-[60%]" : "w-[10%] hover:bg-gray-200"
            } min-w-[40px] block`}
          >
            <img loading="lazy" src={panel.image} alt={`panel-${index}`} className="w-full h-full object-cover object-top" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CreativeGrid