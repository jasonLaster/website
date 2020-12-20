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
      <Content />
      <Team />
      <CallToAction />
    </>
  );
}
