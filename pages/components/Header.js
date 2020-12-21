function Link({ href, children }) {
  return (
    <a href={href} class="font-medium text-gray-500 hover:text-gray-900">
      {children}
    </a>
  );
}

export default function Header() {
  return (
    <div class="max-w-7xl pt-6 mx-auto px-4 sm:px-6">
      <nav
        class="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a
              href="/"
              class="flex items-center justify-between w-full md:w-auto space-x-2"
            >
              <span class="sr-only">Workflow</span>
              <img class="h-5 w-auto sm:h-6" src="/logo.svg" alt="" />
              <h1 class="text-4xl tracking-tight accent-primary sm:text-3xl md:text-xl">
                Replay
              </h1>
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                id="main-menu"
                aria-haspopup="true"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:flex md:space-x-10">
          <Link href="https://www.notion.so/Docs-56758667f53a4d51b7c6fc7a641adb02">
            Docs
          </Link>

          <Link href="/about-us">About Us</Link>
        </div>
        <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span class="inline-flex rounded-md shadow">
            <a
              href="/view"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-500 bg-white hover:text-indigo-500"
            >
              Log in
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
}
