import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";


require("../src/shared/custom-css.css");
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Review thời trang.</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
