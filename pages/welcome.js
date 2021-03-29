import Image from "next/image";

export default function Download() {
  return (
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white">
              <Image width="48px" height="48px" src="/logo.svg" alt="" />
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-2xl leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Stay tuned
              </h3>
              <div class="mt-2">
                <p class="text-md text-gray-500">
                  We're hard at work making Replay fantastic, so we don't have a
                  public download link yet. But we'd love to hear from you on
                  our Discord. See you there!
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <a
              className="whitespace-nowrap inline-flex items-center justify-center py-2 border border-bg-gray-100 rounded-md shadow-sm text-base font-medium text-black bg-white hover:bg-gray-100"
              href="https://replay.io"
            >
              Back to Replay.io
            </a>

            <a
              className="whitespace-nowrap inline-flex items-center justify-center py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
              href="https://discord.com/invite/dtYw6urArk"
            >
              Visit our Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
