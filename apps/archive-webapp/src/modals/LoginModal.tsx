import { Button, Modal } from "antd";
import { createClient } from "~/utils/supabase/server";

interface iProps {
  open: boolean;
}

export default function LoginModal(props: iProps) {
  const { open } = props;

  const doLogin = async (provider: "google" | "kakao" | "twitter") => {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.origin}/api/auth/callback`,
        queryParams: {
          response_type: "code",
        },
      },
    });
    if (error) console.error("[ERROR] login ", provider, error);
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
