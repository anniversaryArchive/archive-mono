import "@repo/ui/font";

import { ConfigProvider } from "antd";
import { createGlobalStyle } from "styled-components";
import type { AppProps } from "next/app";

// TODO: #1 PR 병합 후 "~/" 경로로 변경
import { PRIMARY_COLOR } from "../../../../contexts/global";
import globalToken from "../../../../utils/antd/globalToken";
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
    <ConfigProvider {...globalToken}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}
