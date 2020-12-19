import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  );
}
