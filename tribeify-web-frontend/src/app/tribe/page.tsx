import Image from "next/image";

import PostCategories from "@/components/PostCategories";

import PostInFeed from "../../components/PostInFeed";
import Sidebar from "../../components/Sidebar";
import WritePostBtn from "./WritePostBtn";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl p-8">
      <div className="max-w-3xl">
        <WritePostBtn />
        <PostCategories />
        <div className="space-y-4">
          <PostInFeed />
          <PostInFeed />
          <PostInFeed />
          <PostInFeed />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
