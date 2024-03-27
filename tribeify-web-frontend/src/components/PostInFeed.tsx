import Image from "next/image";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChatBubbleOvalLeftIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  BellIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function PostInFeed() {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-5">
      <div className="flex items-center">
        <div className="flex size-10 items-center justify-center overflow-hidden rounded-full">
          <Image
            alt=""
            width={100}
            height={100}
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></Image>
        </div>
        <div className="ml-3 font-medium">Jon Doe</div>
        <div className="ml-3 text-sm font-medium opacity-70">2 days ago</div>
        <div className="ml-auto rounded-lg p-1">
          <EllipsisHorizontalIcon className="size-5 stroke-2" />
        </div>
      </div>
      <strong className="mt-2 text-lg font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic assumenda
        perspiciatis ex porro consectetur consequuntur ratione unde, facere
        magnam eaque
      </strong>
      <p className="mt-3 opacity-70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        aspernatur, fuga non adipisci minus labore quod vitae. Odio voluptates
        excepturi quo dolores similique! Numquam inventore reprehenderit
        voluptas, laboriosam nobis blanditiis.
      </p>
      <div className="mt-2 flex gap-3">
        <div className="flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium">
          Discussion
        </div>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex w-fit items-center gap-2 rounded-lg bg-stone-100 px-2 py-1">
          <ChevronDownIcon className="size-5 stroke-2" />
          <div className="text-sm font-medium">123</div>
          <ChevronUpIcon className="size-5 stroke-2" />
        </div>
        <div className="flex w-fit items-center gap-2 rounded-lg bg-stone-100 px-2 py-1">
          <ChatBubbleOvalLeftIcon className="size-5 stroke-2" />
          <div className="text-sm font-medium">123</div>
        </div>
        <div className="text-sm opacity-50">Last comment 5 minutes ago</div>
      </div>
    </div>
  );
}
