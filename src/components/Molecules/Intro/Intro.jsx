import React from "react";

const Intro = () => {
  return (
    <div className="relative z-0 lg:pt-16 pt-40  pb-32 flex content-center items-center justify-center min-h-screen-75">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Your story starts with us.
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                This is a simple example of a Landing Page you can build using
                Notus React. It features multiple CSS components based on the
                Tailwind CSS design system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Intro;