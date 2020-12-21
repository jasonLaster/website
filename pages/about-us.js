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
          We believe people understand what they can see, and if you cannot see
          what your software is doing, you cannot understand it.
        </p>

        <p className="mt-8 text-xl text-gray-500 leading-8">
          Recording and replaying software is not a new idea. It is just
          incredibly difficult to pull off in practice. We started researching
          “web replay” at Mozilla in 2015 and founded Replay last July.
        </p>

        <p className="mt-8 text-xl text-gray-500 leading-8">
          We see a world where collaborating with Replay is second nature. When
          an engineer gets stuck, they share a replay. When a test fails, a
          developer clicks a link to view the replay. When a question is asked
          on Stack Overflow, folks comment directly in the replay. When an issue
          is filed in Github, an open source maintainer checks out the replay.
          You see where we’re going with this!
        </p>

        <p className="mt-8 text-xl text-gray-500 leading-8">
          We believe recording software at scale, will change the way we
          understand software. On a simple level, we can show type-hints in the
          editor and even suggest type improvements. On a more fundamental
          level, we can begin automating the debugging process by first
          suggesting hypothesis and eventually suggesting potential fixes.
        </p>

        <p className="mt-8 text-xl text-gray-500 leading-8">
          If you’re excited to be a part of this journey and think Replay could
          be a good fit for your team please reach out to{" "}
          <a href="mailto:hi@replay.io">hi@replay.io</a>.
        </p>
      </Content>
      <Team />
      <CallToAction />
    </>
  );
}
