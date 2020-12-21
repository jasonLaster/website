import BackgroundShapes from "./BackgroundShapes";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import React, { useState } from "react";
import Carousel from "./Carousel";

export default function Hero() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <BackgroundShapes />

        <div className="relative  pb-16 sm:pb-24">
          <Header toggleDropdown={toggleDropdown} />
          <HeaderMenu
            showDropdown={showDropdown}
            toggleDropdown={toggleDropdown}
          />

          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">
                  <span className="accent-primary">Play</span>
                  <span> it like a video.</span>
                </span>
                <span className="block mt-2">
                  <span className="accent-secondary">Inspect</span>
                  <span> it like a website.</span>
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
                As simple as opening Replay, recording, and sharing a link.
              </p>
              <a
                className="typeform-share mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 sm:w-auto"
                href="https://form.typeform.com/to/jAaabLbi"
                data-mode="drawer_right"
                data-submit-close-delay="0"
                target="_blank"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1"></div>
            <div className="flex-1 w-full bg-gray-800"></div>
          </div>
          <Carousel />
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:py-8 sm:px-6 lg:px-8">
          <a href="/">
            <h2 className="text-center text-gray-300 text-lg font-light tracking-wide md:max-w-4xl max-w-md mx-auto underline">
              See Replay in action
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}
