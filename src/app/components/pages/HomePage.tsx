"use client";
import React, { useEffect, useRef, useState } from "react";
import HeadingTop from "../home/HeadingTop";
import ScrollAnimations from "../home/ScrollAnimation";

function HomePage() {
  const [isSticky, setIsSticky] = useState(true);
  const targetRef = useRef(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const greyContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageContainerRef.current) {
        const imageContainerBottom =
          imageContainerRef.current.getBoundingClientRect().bottom;

        setIsSticky(imageContainerBottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="md:w-8/12 w-11/12 bg-black h-full grid grid-rows-[auto,1fr]">
          <div className="h-24 flex items-center justify-center text-white"></div>

          <div
            className={`z-10 h-96 ${isSticky ? "sticky top-0" : "relative"}`}
            ref={targetRef}
          >
            <HeadingTop />
          </div>

          <div
            ref={imageContainerRef}
            className={`${isSticky ? "sticky top-0" : "relative"}`}
            style={{ zIndex: 5 }}
          >
            <ScrollAnimations />

          </div>
        </div>
      </div>
      <div ref={greyContainerRef} className="h-screen w-full bg-black">
        {/* <h1>{isSticky ? "isSticky-true" : "isSticky-false"}</h1> */}
      </div>
    </>
  );
}

export default HomePage;
