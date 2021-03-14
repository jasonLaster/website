import Footer from "./Footer";
export default function CallToAction() {
  return (
    <>
      <div className="bg-blue-700">
        <div className="max-w-5xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="font-extrabold text-white sm:text-5xl">
            <span className="block">Want to be first in line?</span>
          </h2>

          <a
            className="typeform-share mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 sm:w-auto"
            href="https://form.typeform.com/to/jAaabLbi"
            data-mode="drawer_right"
            data-submit-close-delay="0"
            target="_blank"
          >
            Join the waitlist
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
