import { useRef, useState, useEffect } from "react";
import { CaseStudyLink } from "../tag/CaseStudy";
import { GlowTagGroup } from "../tag/glow-tag-group";
import Image from "next/image";

import { datas } from "./datas";

const ScrollAnimation = () => {
  const [inViewArray, setInViewArray] = useState<boolean[]>(new Array(datas.length).fill(false));

  const refs = useRef<(HTMLDivElement | null)[]>(new Array(datas.length).fill(null));

  const handleVisibilityChange = (index: number, isInView: boolean) => {
    const updatedArray = [...inViewArray];
    updatedArray[index] = isInView;
    setInViewArray(updatedArray);
  };

  const getCurrentImage = () => {
    for (let i = 0; i < datas.length; i++) {
      if (inViewArray[i]) {
        return datas[i].imgLink;
      }
    }
    return datas[0].imgLink; 
  };

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            handleVisibilityChange(index, entry.isIntersecting);
          },
          { threshold: 0.5 }
        );
        observer.observe(ref);
        return observer;
      }
      return null;
    });

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, [inViewArray]);

  return (
    <div className="bg-black text-white mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="sticky top-32 h-[60vh] flex">
          <Image
            src={getCurrentImage()}
            alt="Project Preview"
            width={800} 
            height={600}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
        </div>

        <div>
          {datas.map((data, index) => {
            return (
              <div key={index} 
              ref={(el) => {
                refs.current[index] = el;
              }}
              className="py-24">

                <div className="pb-6">
                  <GlowTagGroup tags={data.tags} />
                </div>
                <h1 className="font-normal font-tggMedium text-5xl">{data.heading}</h1>
                <p className="text-gray-400 text-sm font-semibold font-tggBold mt-4">{data.content}</p>
                <CaseStudyLink href={data.fullCaseLink} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
