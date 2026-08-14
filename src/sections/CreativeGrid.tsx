import { useState, useRef, type FC } from "react";

// image imports 

import fitz from "../assets/creativeworkimages/singleusefitzshow.jpg"
import valentines from "../assets/creativeworkimages/valentines2026green.jpg"
import indie1 from "../assets/creativeworkimages/indieheadsimg.jpg"
import indie2 from "../assets/creativeworkimages/indieheads2.jpg"
import indiecake from "../assets/creativeworkimages/indieheadscakeonlawn.jpg"
import silenthill from "../assets/creativeworkimages/silenthill.jpg"
import v2 from "../assets/creativeworkimages/v2.jpg" 
import miataposter from "../assets/creativeworkimages/miataposter.png"
import newindieheadmerch from "../assets/creativeworkimages/newindieheadmerch.png"

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
  { image: miataposter },
  { image: newindieheadmerch },
];

const CreativeGrid: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const VISIBLE_COUNT = 7;

  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  const prev = () => {
    const newStart = (startIndex - 1 + panels.length) % panels.length;
    setStartIndex(newStart);
    const inVisible = Array.from({ length: Math.min(VISIBLE_COUNT, panels.length) }).some((_, i) => (newStart + i) % panels.length === expandedIndex);
    if (!inVisible) setExpandedIndex(newStart);
  };

  const next = () => {
    const newStart = (startIndex + 1) % panels.length;
    setStartIndex(newStart);
    const inVisible = Array.from({ length: Math.min(VISIBLE_COUNT, panels.length) }).some((_, i) => (newStart + i) % panels.length === expandedIndex);
    if (!inVisible) setExpandedIndex(newStart);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50;

  const nextModal = () => setModalIndex((i) => (i + 1) % panels.length);
  const prevModal = () => setModalIndex((i) => (i - 1 + panels.length) % panels.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (delta > SWIPE_THRESHOLD) {
      nextModal();
    } else if (delta < -SWIPE_THRESHOLD) {
      prevModal();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <main className="w-screen h-screen overflow-hidden flex items-center justify-center">
      {/* mobile view (vertical) */}
      <div className="md:hidden flex flex-col w-full h-[80vh] gap-2 items-center justify-center z-10 mx-auto my-auto">
        {panels.map((panel, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className={`w-full rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out overflow-hidden h-[10%] min-h-[40px] block`}
          >
            <img loading="lazy" src={panel.image} alt={`panel-${index}`} className="w-full h-full object-cover object-top" />
          </div>
        ))}
      </div>

      {/* mobile full-screen modal */}
      {modalOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          <button
            aria-label="close"
            onClick={closeModal}
            className="absolute right-4 top-4 z-50 text-white bg-transparent hover:bg-white/10 p-3 rounded-full border border-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-h-full w-full flex items-center justify-center">
            <img src={panels[modalIndex].image} alt={`modal-${modalIndex}`} className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      )}

      {/* desktop view (carousel with animated panels) */}
      <div className="hidden md:block w-full max-w-7xl h-[80vh] relative mx-auto my-auto">
        <button
          aria-label="previous"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-r-lg hover:bg-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          aria-label="next"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-l-lg hover:bg-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="overflow-hidden h-full rounded-2xl">
          <div className="flex h-full w-full"> 
            {Array.from({ length: Math.min(VISIBLE_COUNT, panels.length) }).map((_, i) => {
              const idx = (startIndex + i) % panels.length;
              const isExpanded = idx === expandedIndex;
              return (
                <div key={idx} className="h-full p-1 transition-all duration-500" style={{ flex: isExpanded ? 6 : 1, minWidth: 0 }}>
                  <div
                    onClick={() => handleClick(idx)}
                    className={`h-full rounded-xl bg-black cursor-pointer overflow-hidden border border-transparent hover:border-white/20 transition-all duration-500`}
                  >
                    <img loading="lazy" src={panels[idx].image} alt={`panel-${idx}`} className="w-full h-full object-cover object-center" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreativeGrid