"use client";

import { Button, Modal } from "antd";

interface iProps {
  open: boolean;
}

export default function LoginModal(props: iProps) {
  const { open } = props;

  const doLogin = async (provider: "google" | "kakao" | "twitter") => {
    const response = await fetch(`/api/auth/login?provider=${provider}`, {
      method: "POST",
      credentials: "include", // 쿠키 포함
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url; // ✅ 여기서 직접 로그인 페이지로 이동
    } else {
      console.error("Login failed:", data.error);
    }
  };

  return (
    <>
      <Modal title="Login" open={open}>
        <Button onClick={() => doLogin("twitter")}>X LOGIN</Button>
        <Button onClick={() => doLogin("kakao")}>Kakao LOGIN</Button>
        <Button onClick={() => doLogin("google")}>Google LOGIN</Button>
      </Modal>
    </>
  );
}

// 참고
// https://velog.io/@jntantmsemt/supabase-%EC%86%8C%EC%85%9C%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%EA%B8%80-%EB%A1%9C%EA%B7%B8%EC%9D%B8
