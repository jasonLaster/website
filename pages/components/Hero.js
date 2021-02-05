import BackgroundShapes from "./BackgroundShapes";
import Header from "./Header";
import React, { useState } from "react";
import Carousel from "./Carousel";
import VideoPlayer from "./VideoPlayer";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <BackgroundShapes />
        {showVideo && <VideoPlayer setShowVideo={setShowVideo} />}
        <div className="relative  pb-16 sm:pb-24">
          <Header />

          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">
                  <span className="text-pink-500">Record</span>
                  <span> your app</span>
                </span>
                <span className="block mt-5">
                  <span className="text-purple-500 ">Discuss</span>
                  <span> the video</span>
                </span>
                <span className="block mt-5">
                  <span className="text-indigo-500">Inspect</span>
                  <span> the code</span>
                </span>
              </h1>

              <p className="my-12 max-w-lg mx-auto text-base text-gray-500 sm:text-lg  md:text-xl md:max-w-3xl">
                Stop wasting time reproducing the problem. With Replay, you can
                go from the video to the code and fix the problem in a fraction
                of the time.
              </p>

              <a
                className="typeform-share w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 sm:w-auto"
                href="https://form.typeform.com/to/jAaabLbi"
                data-mode="drawer_right"
                data-submit-close-delay="0"
                target="_blank"
              >
                Join the waitlist
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1"></div>
            <div className="flex-1 w-full bg-gray-800"></div>
          </div>
          <Carousel setShowVideo={setShowVideo} />
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:py-8 sm:px-6 lg:px-8 text-center">
          <a
            href="#"
            onClick={(e) => {
              setShowVideo(true);
              e.preventDefault();
            }}
            className=" text-gray-300 text-lg font-light tracking-wide md:max-w-4xl max-w-md mx-auto underline"
          >
            See it in action
          </a>
        </div>
      </div>
    </div>
  );
}
