import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta
          name="keywords"
          content="Portfolio, NextJS, HTML, CSS, JavaScript, Developer, Jeffrey Tan, React, React Native, Web, Mobile"
        />
        <meta name="author" content="Jeffrey Tan" />
        <meta
          name="description"
          content="I'm Jeff, And I want to help you build your next web or mobile app! Interested? Take a look at my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
