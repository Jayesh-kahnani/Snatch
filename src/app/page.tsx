// src/app/page.tsx
"use client"
import { getUserInfo, UserInfo } from "@/lib/userUtils";
import { SessionProvider, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Content />
    </SessionProvider>
  );
}

function Content() {
  const { data: session } = useSession();
  const userInfo: UserInfo = getUserInfo(session);

  return (
    <h1>
      Hii <i> {userInfo.name}.</i>
      <br /> description here. 
       </h1>
  );
}
