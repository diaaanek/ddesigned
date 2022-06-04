import Head from "next/head";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vedio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
};

export default Layout;
