import React from 'react';

const Intro = () => {
  return (
    <div
      className="relative z-0 lg:pt-16 pt-40  pb-32 flex content-center items-center justify-center min-h-screen-75"
      id="intro-container"
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
        }}
      >
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto mt-16">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <h1 className="text-white font-semibold text-5xl" id="intro-title">
              Enjoying the Journey
            </h1>
            <div className="flex w-full justify-evenly my-4 text-gray-200 ">
              <p className="inline text-md leading-relaxed px-3" id="intro-text">
                Computer Enthusiast
              </p>

              <p className="inline text-md leading-relaxed px-3">
                JavaScript Senior Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
