import React, { useState, useRef, useEffect } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function LazyImage({ src, alt = "", className, style }: Props) {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if ((window as any).IntersectionObserver) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              io.disconnect();
            }
          });
        },
        { rootMargin: "200px" }
      );
      io.observe(el);
      return () => io.disconnect();
    }
    // fallback
    setVisible(true);
  }, []);

  return (
    // keep an img element for layout; only set src when visible
    <img
      ref={imgRef}
      src={visible ? src : undefined}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
    />
  );
}
