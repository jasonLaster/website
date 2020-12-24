import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Download() {
  return (
    <div className="bg-gray-50 flex flex-col h-full">
      <Header />
      <div
        className="flex flex-col align-center my-12"
        style={{ flex: "1 0 auto" }}
      >
        <div className="max-w-7xl mx-auto text-center py-8 my-12 px-4 sm:px-6 ">
          <h2 className="text-3xl">👋 </h2>
          <div className="mt-12 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/downloads/replay.dmg"
                className="inline-flex items-center font-bold justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Download Replay for Mac
              </a>
            </div>
          </div>
          <div className="my-4 italic text-gray-500">
            Linux support coming soon!
          </div>
          <div className="mt-20">
            <Image src="/recording.png" width="800px" height="560px" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
