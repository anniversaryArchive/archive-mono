import { NextRequest, NextResponse } from "next/server";
import { createClient } from "~/utils/supabase/server";

export const config = {
  runtime: "edge", // ✅ Edge 런타임 설정
};

export default async function GET(request: NextRequest, res: NextResponse) {
  console.log("heidi test 0-1");
  const { searchParams, origin } = new URL(
    request.url,
    process.env.NEXTAUTH_URL
  );
  console.log("heidi test 0-2");
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    console.log("heidi test 1");
    const supabase = await createClient(request, res);
    console.log("heidi test 2", code);
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    console.log("heidi test 3", data);
    console.log("heidi test 3", error);
    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
