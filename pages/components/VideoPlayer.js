import { Children } from "react";

export default function VideoPlayer({ setShowVideo }) {
  const width =
    typeof window == "object" ? Math.min(window.outerWidth * 0.8, 1000) : 800;
  const height = width / 1.77;
  console.log("showing video");
  return (
    <Modal closeModal={() => setShowVideo(false)}>
      <iframe
        width={`${width}px`}
        height={`${height}px`}
        src="https://www.youtube.com/embed/Qkxt4enr-9w?controls=0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Modal>
  );
}

function Modal({ children, closeModal }) {
  return (
    <div
      onClick={() => closeModal()}
      class="fixed z-20 inset-0 overflow-y-auto"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        {/* <!--
        Modal panel, show/hide based on modal state.
  
        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
        <div
          class="bg-gray-100 inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
