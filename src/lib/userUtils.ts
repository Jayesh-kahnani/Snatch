// userUtils.ts
import { Session } from "next-auth";

export interface UserInfo {
  name?: string;
  email?: string;
  profile?: string; // Add more fields as needed
status?: string;}

export const getUserInfo = (session: Session | null = null): UserInfo => {
  const userInfo: UserInfo = {};

  if (session) {
    userInfo.name = session.user?.name ?? "";
    userInfo.email = session.user?.email ?? "";
    userInfo.profile = session.user?.image ?? ""; 
  }
  else {
    userInfo.name = "Guest"
    userInfo.email = "Not logged in"
    userInfo.profile = "Not logged in"
  }
  return userInfo;
};
