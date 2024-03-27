import Image from "next/image";

import { backendApi } from "@/utils/edenTreaty";

import PostCategories from "@/components/PostCategories";

import PostInFeed from "../../components/PostInFeed";
import Sidebar from "../../components/Sidebar";
import WritePostBtn from "./WritePostBtn";

export default async function Home() {
  const { data, error } = await backendApi["server-health"].post();
  console.log(data);

  return (
    <div className="mx-auto flex max-w-6xl p-8">
      {JSON.stringify(data)}
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
