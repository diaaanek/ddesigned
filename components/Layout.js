import Head from "next/head";
import Author from "./Author";
import Footer from "./Footer/Footer";
import FooterTip from "./FooterTip";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/AirbnbCereal-Book.ttf'
          as='font'
          type='font/ttf'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/AirbnbCereal-Medium.ttf'
          as='font'
          type='font/ttf'
          crossOrigin=''
        />

        <link
          rel='preload'
          href='/fonts/AirbnbCereal-Bold.ttf'
          as='font'
          type='font/ttf'
          crossOrigin=''
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
      {/* <Footer /> */}
      <FooterTip />
      {/* <Author /> */}
    </>
  );
};

export default Layout;
