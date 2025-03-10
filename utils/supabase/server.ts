"use server";

import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr";
import { SupportedStorage } from "@supabase/supabase-js";
import { NextApiResponse } from "next";

const customStorageAdapter: SupportedStorage = {
  getItem: (key: string) => {
    const cookies = parseCookieHeader(globalThis.document?.cookie || "");
    return (cookies.find(({ name }) => name === key) ?? null) as any;
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}; path=/; Secure; HttpOnly; SameSite=Lax`;
  },
  removeItem: (key) => {
    document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; HttpOnly; SameSite=Lax`;
  },
};

const headers = new Headers();
export async function createClient(
  cookieHeader: string,
  res?: NextApiResponse
) {
  headers.append("Cookie", cookieHeader);

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        detectSessionInUrl: false,
        flowType: "pkce",
        storage: customStorageAdapter,
        persistSession: true,
      },
      cookies: {
        getAll() {
          const cookie = parseCookieHeader(cookieHeader ?? "");
          return cookie;
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            headers.append(
              "Set-Cookie",
              serializeCookieHeader(name, value, options)
            );
            res?.setHeader(
              "Set-Cookie",
              serializeCookieHeader(name, value, options)
            );
          });
        },
      },
    }
  );
}
