import BackgroundShapes from "./BackgroundShapes";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";

export default function Hero() {
  return (
    <div class="bg-gray-50">
      <div class="relative overflow-hidden">
        <BackgroundShapes />

        <div class="relative  pb-16 sm:pb-24">
          <Header />
          <HeaderMenu />

          <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div class="text-center">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block">
                  <span class="text-blue-500">Play</span>
                  <span> it like a video.</span>
                </span>
                <span class="block">
                  <span class="text-blue-500">Inspect</span>
                  <span> it like a website.</span>
                </span>
              </h1>
              <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
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
        <div class="relative">
          <div class="absolute inset-0 flex flex-col" aria-hidden="true">
            <div class="flex-1"></div>
            <div class="flex-1 w-full bg-gray-800"></div>
          </div>
          <div class="max-w-5xl mx-auto px-4 sm:px-6">
            <img
              class="relative rounded-lg shadow-2xl"
              src="/screenshot.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
      <div class="bg-gray-800">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 class="text-center text-gray-200 text-lg font-regular tracking-wide md:max-w-4xl max-w-md mx-auto">
            Replay is a screen recorder for creating recordings that developers can debug. It includes everything you expect from devtools and adds some mind-bendingly useful features designed to save you time. So much precious time.
          </h2>
          <a href="/">
            <h2 class="text-center text-gray-100 text-lg font-bold tracking-wide md:max-w-4xl max-w-md mx-auto underline mt-8">
              Watch the 30 second demo
            </h2>
          </a>
          {/* <h2 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">Replay is a browser recorder</h2> */}
        </div>
      </div>
    </div>
  );
}
