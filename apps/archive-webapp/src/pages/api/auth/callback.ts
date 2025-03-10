"use server";

import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "nodejs", // ✅ Node.js 런타임 사용
};

export default async function handler(
  request: NextApiRequest,
  res: NextApiResponse
) {
  const { searchParams, origin } = new URL(
    request.url || "",
    process.env.NEXTAUTH_URL
  );

  const code = searchParams.get("code");
  if (!code) {
    console.error("❌ Auth code is missing!");
    return res.redirect(`${origin}/auth/auth-code-error`);
  }

  const next = searchParams.get("next") ?? "/";

  if (code) {
    const { createClient } = await import("~/utils/supabase/server");
    const cookieHeader = request.headers.cookie || "";

    const supabase = await createClient(cookieHeader);
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    console.log("heidi test data : ", data);
    if (!error) {
      const forwardedHost = request.headers["x-forwarded-host"]; // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return res.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return res.redirect(`https://${forwardedHost}${next}`);
      } else {
        return res.redirect(`${origin}${next}`);
      }
    }
  }

  // return the user to an error page with instructions
  return res.redirect(`${origin}/auth/auth-code-error`);
}
