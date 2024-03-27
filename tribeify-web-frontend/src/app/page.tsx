import Image from "next/image";

import PostInFeed from "./PostInFeed";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-4xl space-y-4 p-8">
        <PostInFeed />
        <PostInFeed />
        <PostInFeed />
        <PostInFeed />
      </div>
    </>
  );
}
