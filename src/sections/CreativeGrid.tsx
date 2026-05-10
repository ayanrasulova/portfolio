import { useState, type FC } from "react";

type Panel = {
  image: string;
};

const panels: Panel[] = [
  { image: "src/assets/creativeworkimages/singleusefitzshow.jpg" },
  { image: "src/assets/creativeworkimages/valentines2026green.jpg" },
  { image: "src/assets/creativeworkimages/indieheadsimg.jpg" },
  { image: "src/assets/creativeworkimages/indieheads2.jpg" },
  { image: "src/assets/creativeworkimages/indieheadscakeonlawn.jpg" },
  { image: "src/assets/creativeworkimages/silenthill.jpg" },
  { image: "src/assets/creativeworkimages/v2.jpg" },
];

const CreativeGrid: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  return (
    <main className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="flex max-w-7xl h-[80vh] gap-2 items-center justify-center content-center z-10 mx-auto">
            
          {panels.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`h-[80vh] rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${
                expandedIndex === index ? "w-[60%]" : "w-[10%] hover:bg-gray-200"
              } min-w-[40px] block`}
            >
              <img loading="lazy" src={panel.image} alt={`panel-${index}`} className="w-full h-full  object-cover object-top" style={{ maxWidth: expandedIndex === index ? "100%" : "200px" }} />
            </div>
          ))}

        </div>
    </main>
  );
};

export default CreativeGrid