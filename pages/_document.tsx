import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap"
            rel="stylesheet"
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="google-site-verification"
            content="o37xkUkTvsv-cmJibAy1m5FHbbCCjVgA17UIQQvHZh4"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
