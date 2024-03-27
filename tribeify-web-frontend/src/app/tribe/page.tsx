"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import { backendApi } from "@/utils/edenTreaty";

import PostCategories from "@/components/PostCategories";

import PostInFeed from "../../components/PostInFeed";
import Sidebar from "../../components/Sidebar";
import WritePostBtn from "./WritePostBtn";

export default function Home() {
  const [object, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      const response = await backendApi["server-health"].post();
      setData(response);
    })();
  }, []);

  return (
    <div className="mx-auto flex max-w-6xl p-8">
      {JSON.stringify(object)}
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
