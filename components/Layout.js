import Head from "next/head";
import Author from "./Author";
import Footer from "./Footer/Footer";
import FooterTip from "./FooterTip";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7K8MSB');`,
          }}
        />

        <link
          rel='preload'
          href='/fonts/AirbnbCereal-Book.ttf'
          as='font'
          type='font/ttf'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/AirbnbCereal-Medium.ttf'
          as='font'
          type='font/ttf'
          crossOrigin='anonymous'
        />

        <link
          rel='preload'
          href='/fonts/AirbnbCereal-Bold.ttf'
          as='font'
          type='font/ttf'
          crossOrigin='anonymous'
        />

        <title>diane designed</title>
        <meta
          name='description'
          content='award winning app developer and designer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}

      <script
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7K8MSB"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />

      {/* <Footer /> */}
      <FooterTip />
      {/* <Author /> */}
    </>
  );
};

export default Layout;
