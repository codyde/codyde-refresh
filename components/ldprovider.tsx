"use client";

import { use } from "react";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

export default function AsyncLDProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const LDDynaProvider = use(
    asyncWithLDProvider({
      clientSideID: process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_ID || '',
      context: {
        kind: "user",
        key: Math.random().toString(36).substr(2, 4),
        name: "Blog User",
      },
    })
  );

  return <LDDynaProvider>{children}</LDDynaProvider>;
}
