import Head from "next/head";

export default function ({ children }) {
  <>
    <Head>
      <title>Replay</title>
      <title>Replay: Record and replay web applications</title>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link rel="icon" href="/favicon.svg" />
      <meta
        name="description"
        content="Replay your application down to a single line of code"
      />
      <meta name="twitter:site" content="http://replay.io" />
      <meta
        name="twitter:title"
        content="Replay: Record and replay web applications"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content="Replay your application down to a single line of code"
      />
      <meta name="twitter:image" content="http://replay.io/assets/replay.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:title"
        content="Replay: Record and replay web applications"
      />
      <meta
        property="og:site_name"
        content="Replay: Record and replay web applications"
      />
      <meta property="og:url" content="http://replay.io/" />
      <meta property="og:image" content="http://replay.io/assets/replay.png" />
      <meta
        property="og:description"
        content="Replay your application down to a single line of code"
      />
      <meta property="og:image:width" content="940" />
      <meta property="og:image:height" content="673" />

      <meta name="apple-mobile-web-app-title" content="Replay" />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-175044657-1"
      ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `      
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
    
          gtag("config", "UA-175044657-1");`,
        }}
      />
    </Head>
  </>;
}
