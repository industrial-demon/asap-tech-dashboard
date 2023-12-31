import { cookies } from "next/headers";
export function getAccessTokenCookie() {
  const nextCookies = cookies();
  const token = nextCookies.get("access_token")?.value
  return token;
}