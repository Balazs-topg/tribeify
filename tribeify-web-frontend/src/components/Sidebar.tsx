import Image from "next/image";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <div className="ml-6 h-fit max-w-64 shrink-0 overflow-hidden rounded-2xl bg-white">
      <Image
        className="h-40 object-cover"
        alt=""
        width={300}
        height={300}
        src={
          "https://images.unsplash.com/photo-1711450066296-1e8e008637ec?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ></Image>
      <div className=" p-4">
        <h2 className="mb-2 text-lg font-semibold">Adonis Gang</h2>
        <div className="mb-2 text-balance opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="flex w-full gap-2">
          <div className="flex-1 rounded-2xl border-2 border-stone-100 p-2 text-center">
            <div className="font-semibold">25K</div>
            <div className="text-sm">Members</div>
          </div>
          <div className="flex-1 rounded-2xl border-2 border-stone-100 p-2 text-center">
            <div className="font-semibold">1K</div>
            <div className="text-sm">Online</div>
          </div>
        </div>
        <Button className="mt-4 flex w-full items-center justify-center bg-black px-4 py-2 text-center text-white">
          Settings
          <AdjustmentsHorizontalIcon className="ml-1 size-5 stroke-2" />
        </Button>
      </div>
    </div>
  );
}
