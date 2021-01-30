import cookie from "js-cookie";
import { profile } from "../Data/profile";

export const login = (Inputmail, Inputpassword) => {
  let email = Inputmail.toLowerCase();
  let password = Inputpassword.toLowerCase();
  if (
    profile.Email === email ||
    ("judge" === email && profile.Password === password)
  ) {
    cookie.set("isLogin", true, {
      expires: 3,
    });
    return true;
  } else {
    return false;
  }
};
export const logout = () => {
  cookie.remove("isLogin");
};

export const getStatus = () => {
  if (cookie.get("isLogin") === "true") return true;
  return false;
};
