import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en" prefix="og: https://ogp.me/ns#">
      <Head>
        <meta charSet="utf-8"/>
        <meta name="author" content="Edward Chew"/>
        <meta name="description" content="Personal Website"/>

        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-STYLYQSB1P" strategy="afterInteractive"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-STYLYQSB1P');
          `}
        </Script>

        {/* Favicon */}
        {/* <link rel="shortcut icon" href="/Favicon/apple-touch-icon.png" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/Favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/Favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
