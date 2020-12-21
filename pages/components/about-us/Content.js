import { Children } from "react";

export default function Content({ subTitle, title, children }) {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8 ">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              {subTitle}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </span>
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
}
