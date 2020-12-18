import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="icon" href="/favicon.ico" /> */}

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />
          <meta charset="UTF-8" />

          <meta
            name="keywords"
            content="App Development, Web Development, Software Development, Software Company, App Design"
          />
          <meta
            name="description"
            content="PlaceholderTech is an App development agency that is tailored towards the needs of new enthusiastic idea driven companies and startups. We provide best quality developers and designers that are experienced in the niche market."
          />
          <meta
            name="subject"
            content="Full stack mobile (iOS, Android) and web app design and development agency"
          />
          <meta name="copyright" content="PlaceholderTech Play" />
          <meta name="language" content="EN" />
          <meta name="og:title" content="PlaceholderTech Play" />
          <meta name="og:type" content="development" />
          <meta name="og:url" content="http://www.play.placeholdertech.in/" />

          <meta name="og:site_name" content="PlaceholderTech Play" />
          <meta
            name="og:description"
            content="PlaceholderTech is an App development agency that is tailored towards the needs of new enthusiastic idea driven companies and startups. We provide best quality developers and designers that are experienced in the niche market."
          />
          <meta name="og:email" content="contact@theplaceholdertech.tech" />
          <meta name="og:phone_number" content="9587738861" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
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
