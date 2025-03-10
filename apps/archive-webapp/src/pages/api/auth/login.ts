"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { Provider } from "@supabase/supabase-js";
import { createClient } from "~/utils/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookieHeader = req.headers.cookie || ""; // 요청에서 쿠키 가져오기
  const supabase = await createClient(cookieHeader, res);

  // 로그인 시도
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: (req.query.provider || "google") as Provider,
    options: {
      redirectTo: `${process.env.NEXTAUTH_URL}/api/auth/callback`,
    },
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ url: data.url });
}
