import Head from "next/head";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: ` (function () {
            var qs,
              js,
              q,
              s,
              d = document,
              gi = d.getElementById,
              ce = d.createElement,
              gt = d.getElementsByTagName,
              id = "typef_orm_share",
              b = "https://embed.typeform.com/";
            if (!gi.call(d, id)) {
              js = ce.call(d, "script");
              js.id = id;
              js.src = b + "embed.js";
              q = gt.call(d, "script")[0];
              q.parentNode.insertBefore(js, q);
            }
          })();`,
          }}
        />
      </Head>
      <Hero />
      <Testimonials />
      <Features />
      <CallToAction />
    </>
  );
}
