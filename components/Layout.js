import Head from "next/head";
import Author from "./Author";
import Footer from "./Footer/Footer";
import FooterTip from "./FooterTip";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
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
