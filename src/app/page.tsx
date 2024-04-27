// src/app/page.tsx
"use client"
import { SessionProvider, useSession } from "next-auth/react";
import WebsiteDescription from "./ui/WebsiteDescription";

export default function Home() {
  return (
    <SessionProvider>
      <Content />
    </SessionProvider>
  );
}

function Content() {
  const { data: session } = useSession();
  const userInfo = session?.user ?? { name: "Guest" };

  return (
    <>
      <WebsiteDescription />
    </>
  );
}
