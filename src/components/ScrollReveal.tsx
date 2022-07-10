import React, { CSSProperties, FC, useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealProps {
  style?: CSSProperties;
  children: React.ReactNode;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, style }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 500,
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
