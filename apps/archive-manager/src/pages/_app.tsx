import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 로그인 페이지 경로를 확인
  const isLoginPage = router.pathname === '/auth/login';

  return (
    <>
      {!isLoginPage ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
