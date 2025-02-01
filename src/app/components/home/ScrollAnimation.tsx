import { useRef } from "react";
import { CaseStudyLink } from "../tag/CaseStudy";
import { GlowTagGroup } from "../tag/glow-tag-group";

interface DatasInterface {
  tags: string[];
  heading: string;
  imgLink: string;
  content: string;
  fullCaseLink: string;
}

const datas: DatasInterface[] = [
  {
    tags: [
      "Webflow Development",
      "UI/UX Design",
      "Webflow Training",
      "Graphic Design",
    ],
    heading: "Hacien",
    imgLink:
      "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411cf4f8251ab33a7d442b_HACIEN%20Thumbnail.webp",
    content:
      "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging and marketing assets as well as 3D renders of their signature bottles.",
    fullCaseLink: "https://gopakumar-ka-portfolio.vercel.app/",
  },
  {
    tags: [
      "Splash Screens",
      "Illustrations",
      "Graphic Design",
      "Lottie Animations",
      "Webflow Training",
    ],
    heading: "Mobilleo",
    imgLink:
      "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d0755e48e6b5ec08e9a_Mobilio%20Thumbnail-p-800.webp",
    content:
      "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees. The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app.",
    fullCaseLink: "https://gopakumar-ka-portfolio.vercel.app/",
  },
  {
    tags: [
      "Webflow Development",
      "UI/UX Design",
      "Webflow Training",
      "Graphic Design",
    ],
    heading: "Mannson Freight",
    imgLink:
      "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d16c21a037f3b0a622a_Mannson%20Thumbnail-p-800.webp",
    content:
      "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
    fullCaseLink: "https://gopakumar-ka-portfolio.vercel.app/",
  },
  {
    tags: [
      "Webflow Development",
      "UI/UX Design",
      "Webflow Training",
      "Graphic Design",
    ],
    heading: "BOX iQ",
    imgLink:
      "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d311c63649d5c6843d5_Boxiq%20Thumbnail-p-800.webp",

    content:
      "BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
    fullCaseLink: "https://gopakumar-ka-portfolio.vercel.app/",
  },
  {
    tags: [
      "Webflow Development",
      "Visual Identity",
      "Packaging",
      "Apparel & Merchandise",
    ],
    heading: "The Honest Watch Dealer",
    imgLink:
      "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d3f05b871765a7cac0c_Honest%20Watch%20Thumbnail-p-800.webp",

    content:
      "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
    fullCaseLink: "https://gopakumar-ka-portfolio.vercel.app/",
  },
];

const ScrollAnimation = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={targetRef} className="bg-black text-white mx-auto max-w-screen-xl">
      {datas.map((data, index) => (
        <div className="bg-black" key={index}>
          <div className="h-[80vh]"></div>

          <div className="relative py-8 bg-gradient-to-b from-black/5 to-transparent">
            <div className="flex flex-col md:flex-row items-center">
              <div className="sticky top-96 w-1/2 aspect-video flex justify-center overflow-hidden">
                <img
                  src={data.imgLink}
                  alt={data.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 min-h-[120vh] p-4 flex flex-col justify-center">
                <div className="pb-6">
                  <GlowTagGroup tags={data.tags} />
                </div>
                <h1 className="font-normal  font-tggMedium text-5xl">{data.heading}</h1>
                <p className="text-gray-400 text-sm font-semibold font-tggBold mt-4">
                  {data.content}
                </p>
                <CaseStudyLink href={data.fullCaseLink} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;