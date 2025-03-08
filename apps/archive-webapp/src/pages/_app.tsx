import "@repo/ui/font";

import { ConfigProvider } from "antd";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import type { AppProps } from "next/app";

import { PRIMARY_COLOR } from "~/utils/global";
import globalToken from "~/utils/antd/globalToken";
import Layout from "@/components/layout";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}

body {
  background: ${PRIMARY_COLOR}15;
}`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>아카이브</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
      </Head>
      <ConfigProvider {...globalToken}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </>
  );
}
