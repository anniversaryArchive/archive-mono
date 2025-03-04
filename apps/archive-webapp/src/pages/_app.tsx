import "@repo/ui/font";
import "@/styles/globals.css";

import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

import globalToken from "../../../../utils/antd/globalToken";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider {...globalToken}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}
