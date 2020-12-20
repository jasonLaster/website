import Head from "next/head";
import Header from "./components/Header";
import Team from "./components/about-us/Team";
import Content from "./components/about-us/Content";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Replay</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content title="About Replay" subTitle="OUR MISSION">
        <p className="mt-8 text-xl text-gray-500 leading-8">
          There are many tools that help developers develop software faster,
          there are relatively fewer tools that help developers understand their
          software better. That’s where we come in. We believe people understand
          what they can see, and when it comes to software, it is critical to be
          able to record it, in order to replay it and see it.
        </p>
        <p className="mt-8 text-xl text-gray-500 leading-8">
          Recording software is not a new idea. It is just incredibly difficult
          to pull off in practice. Mozilla open sourced the first production
          record replay debugger for C++ in 2007. We started working on
          replaying websites in Firefox around 2015. Replay was founded in July
          of 2020 and we just recently started getting good at replaying real
          world applications like Google Docs, Webflow, and Airtable.
        </p>
        <p className="mt-8 text-xl text-gray-500 leading-8">
          If replaying software becomes second nature it can change the way we
          collaborate. If a user hits an issue, support can record the problem
          and share it with the product team. If an engineer falls gets stuck,
          they can record what they’re seeing, and share it with colleagues. If
          tests are recorded on CI, a developer can review the change directly
          in Replay. If Stack Overflow questions include a replay, others can
          get a better idea of what’s going wrong and comment directly in the
          replay. If Github issues include a replay, open source maintainers
          will be able to view the replay and offer better support. You see
          where we’re going with that!
        </p>
        <p className="mt-8 text-xl text-gray-500 leading-8">
          If software is recorded at scale, it can change the way we understand
          software. There are so many academic approaches for analyzing software
          that have struggled to go mainstream because the analysis was too slow
          to be run in real-time. On a simple level, we can show developers how
          their code is used suggest improvements to their Typescript types. On
          a more fundamental level, we’ll begin being able to help developers
          debug by first suggesting hypothesis and eventually suggesting
          potential fixes.
        </p>
        <p className="mt-8 text-xl text-gray-500 leading-8">
          If you’re excited to be a part of this journey and think Replay could
          be a good fit for your team please reach out to us at{" "}
          <a href="mailto:hi@replay.io">hi@replay.io</a>.
        </p>
      </Content>
      <Team />
      <CallToAction />
    </>
  );
}
