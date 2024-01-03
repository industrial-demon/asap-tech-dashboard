/*** function that used as middleware ***/

import { Router } from "next/router";

  accessToken: async (name) => {
    if (typeof document === "undefined") return "";
    let token = document.cookie
      .split(";")
      .filter((cookie) => cookie.startsWith("token"))[0];

    if (!token) {
      const response = await fetch("/api/refresh", { method: "POST" });
      const data = await response.json();
      if (!data.token) {
        Router.push("/logout");
        return Promise.reject();
      }
      return Promise.resolve(`Bearer ${data.token}`);
    } else {
      if (typeof token === "undefined") return "expired";
      const [_, accessToken] = token.split("=");
      return Promise.resolve(`Bearer ${accessToken}`);
    }
  },