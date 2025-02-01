import React from "react";

function HeadingTop() {
  return (
    <>
      <div className="  bg-black grid grid-cols-2 grid-rows-2 sticky top-0">
        <div className="w-full col-span-2 row-span-1"></div>
        {/* <div className="w-full h-14"></div> */}
        <div>
          {" "}
          <h1 className="text-3xl font-tggSemiBold md:text-5xl  leading-tight">
            Dive into the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
              work.
            </span>
          </h1>
          <p className="text-gray-500 text-sm font-semibold mt-4 font-tggSemiBold">
            As creatives ourselves, we know that what you really want to see is
            the work we’ve actually put live. Here’s a showcase of some of our
            recent projects, across a range of sectors.
          </p>
        </div>
        <div className="relative bg-gradient-to-b from-black to-black p-6">
          
        </div>
      </div>
    </>
  );
}

export default HeadingTop;
