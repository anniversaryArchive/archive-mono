import "@repo/ui/font";
import "@/styles/globals.css";

import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

import globalToken from "@repo/antd-config/globalToken";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider {...globalToken}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
