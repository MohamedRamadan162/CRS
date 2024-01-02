import { withIronSession } from "next-iron-session";

export function withSession(handler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "MyCookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "development" ? false : true,
    },
  });
}
