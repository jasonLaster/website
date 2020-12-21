export default function Testimonials() {
  return (
    <div className="relative">
      <div
        className="absolute right-0 bottom-1/2 left-0 bg-gradient-to-t from-gray-100 pointer-events-none"
        // style="height: 607px; max-height: 50vh"
      ></div>
      <div className="flex overflow-hidden -my-8">
        <ul className="flex items-center w-full py-8">
          <li
            className="px-3 md:px-4 flex-none"
            // style="transform: translateX(1094.92%) translateZ(0px)"
          >
            <figure
              className="shadow-lg rounded-xl flex-none w-80 md:w-xl"
              // style="transform: rotate(-2deg) translateZ(0)"
            >
              <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                <svg
                  width="45"
                  height="36"
                  className="mb-5 fill-current text-cyan-100"
                >
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
                <p>
                  I feel like an idiot for not using Tailwind CSS until now.
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-cyan-400 to-light-blue-500">
                <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="/_next/static/media/ryan-florence.7fd3cc89a4647edfecfe7129894b690d.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full bg-cyan-100"
                    loading="lazy"
                  />
                </div>
                <div className="flex-auto">
                  Ryan Florence
                  <br />
                  <span className="text-cyan-100">
                    Remix &amp; React Training
                  </span>
                </div>
                <cite className="flex">
                  <a
                    href="https://twitter.com/ryanflorence/status/1187951799442886656"
                    className="opacity-50 hover:opacity-75 transition-opacity duration-200"
                  >
                    <span className="sr-only">
                      Original tweet by Ryan Florence
                    </span>
                    <svg width="33" height="32" fill="currentColor">
                      <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z"></path>
                    </svg>
                  </a>
                </cite>
              </figcaption>
            </figure>
          </li>
          <li
            className="px-3 md:px-4 flex-none"
            // style="transform: translateX(1094.92%) translateZ(0px)"
          >
            <figure
              className="shadow-lg rounded-xl flex-none w-80 md:w-xl"
              // style="transform: rotate(1deg) translateZ(0px)"
            >
              <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                <svg
                  width="45"
                  height="36"
                  className="mb-5 fill-current text-fuchsia-100"
                >
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
                <p>
                  If I had to recommend a way of getting into programming today,
                  it would be HTML + CSS with Tailwind CSS.
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-fuchsia-500 to-purple-600">
                <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="/_next/static/media/guillermo-rauch.523f98892fd842ac532812d4f6edd26a.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full bg-fuchsia-100"
                    loading="lazy"
                  />
                </div>
                <div className="flex-auto">
                  Guillermo Rauch
                  <br />
                  <span className="text-fuchsia-100">Vercel</span>
                </div>
                <cite className="flex">
                  <a
                    href="https://twitter.com/rauchg/status/1225611926320738304"
                    className="opacity-50 hover:opacity-75 transition-opacity duration-200"
                  >
                    <span className="sr-only">
                      Original tweet by Guillermo Rauch
                    </span>
                    <svg width="33" height="32" fill="currentColor">
                      <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z"></path>
                    </svg>
                  </a>
                </cite>
              </figcaption>
            </figure>
          </li>
          <li
            className="px-3 md:px-4 flex-none"
            // style="transform: translateX(1094.92%) translateZ(0px)"
          >
            <figure
              className="shadow-lg rounded-xl flex-none w-80 md:w-xl"
              // style="transform: rotate(-1deg) translateZ(0px)"
            >
              <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                <svg
                  width="45"
                  height="36"
                  className="mb-5 fill-current text-orange-100"
                >
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
                <p>
                  I have no design skills and with Tailwind I can actually make
                  good looking websites with ease and it's everything I ever
                  wanted in a CSS framework.
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-orange-400 to-pink-600">
                <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="/_next/static/media/sara-vieira.53f08a9bc2787e4ee05e4678577a05fe.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full bg-orange-100"
                    loading="lazy"
                  />
                </div>
                <div className="flex-auto">
                  Sara Vieira
                  <br />
                  <span className="text-orange-100">CodeSandbox</span>
                </div>
              </figcaption>
            </figure>
          </li>
          <li
            className="px-3 md:px-4 flex-none"
            // style="transform: translateX(1094.92%) translateZ(0px)"
          >
            <figure
              className="shadow-lg rounded-xl flex-none w-80 md:w-xl"
              // style="transform: rotate(2deg) translateZ(0)"
            >
              <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                <svg
                  width="45"
                  height="36"
                  className="mb-5 fill-current text-green-100"
                >
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
                <p>
                  I used Tailwind to redesign feltpresence.com the other day.
                  It's fantastic! I only gave myself a few hours to hack it
                  together and it made a huge difference.
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-green-400 to-cyan-500">
                <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="/_next/static/media/ryan-singer.a201076674e4c94d9dfc1298c47268c3.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full bg-green-100"
                    loading="lazy"
                  />
                </div>
                <div className="flex-auto">
                  Ryan Singer
                  <br />
                  <span className="text-green-100">Basecamp</span>
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
}
