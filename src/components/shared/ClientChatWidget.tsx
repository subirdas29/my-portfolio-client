"use client";

import dynamic from "next/dynamic";

// [OPTIMIZATION] Client wrapper for ChatWidget with ssr:false.
// This ensures the heavy ChatWidget (framer-motion + react-markdown)
// is never included in the server bundle, reducing initial JS payload.
// The component only loads client-side after hydration is complete.
const ChatWidget = dynamic(() => import("@/components/shared/ChatWidget"), {
  ssr: false,
  loading: () => null,
});

export default function ClientChatWidget() {
  return <ChatWidget />;
}
