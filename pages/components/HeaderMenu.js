function MenuItem({ children, href }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
      role="menuitem"
    >
      {children}
    </a>
  );
}
export default function HeaderMenu({ showDropdown, toggleDropdown }) {
  return (
    <div
      style={{ display: showDropdown ? "block" : "none" }}
      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right "
    >
      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-5 pt-4 flex items-center justify-between">
          <div>
            <img className="h-5 w-auto sm:h-6" src="/logo.svg" alt="" />
          </div>
          <div className="-mr-2">
            <button
              type="button"
              onClick={toggleDropdown}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1" role="none">
            <MenuItem href="https://www.notion.so/Docs-56758667f53a4d51b7c6fc7a641adb02">
              Docs
            </MenuItem>

            <MenuItem href="/about-us"> About Us</MenuItem>
          </div>
          <div role="none">
            <a
              href="/view"
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"
              role="menuitem"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
