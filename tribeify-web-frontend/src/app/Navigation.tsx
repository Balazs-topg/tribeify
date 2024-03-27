import Image from "next/image";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChatBubbleOvalLeftIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export default function Navigation() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white p-3">
        <div className="mx-auto flex w-full max-w-7xl items-center">
          <div className="flex flex-1 items-center gap-8">
            <strong className="text-lg font-bold">Tribeify</strong>
            <div className="flex items-center justify-center rounded-full bg-stone-100 px-1 py-1">
              <div className="flex size-8 items-center justify-center overflow-hidden rounded-full">
                <Image
                  alt=""
                  className="w-full"
                  width={20}
                  height={20}
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></Image>
              </div>
              <div className="ml-2 font-medium">Adonis Gang</div>
              <div className="mx-2">
                <ChevronDownIcon className="size-5 stroke-2"></ChevronDownIcon>
              </div>
            </div>
          </div>
          <div className="bg flex flex-1 items-center justify-center rounded-full bg-stone-100 py-2 text-sm font-medium">
            <MagnifyingGlassIcon className="mr-1 size-5 stroke-2 opacity-50"></MagnifyingGlassIcon>
            <div className="opacity-50">Search</div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="flex size-9 items-center justify-center rounded-full bg-stone-100">
              <ChatBubbleOvalLeftIcon className="size-6 stroke-2" />
            </div>
            <div className="flex size-9 items-center justify-center rounded-full bg-stone-100">
              <BellIcon className="size-6 stroke-2" />
            </div>
            <div className="flex size-9 items-center justify-center overflow-hidden rounded-full">
              <Image
                alt=""
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></Image>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-white pt-1">
        <div className="mx-auto flex w-full max-w-3xl items-center gap-8 font-medium">
          <div className="relative">
            <div className="p-2">Community</div>
            <div className="absolute bottom-0 h-1 w-full rounded-t-full bg-black"></div>
          </div>
          <div className="relative opacity-60">
            <div className="p-2">Classroom</div>
            <div className="absolute bottom-0 hidden h-1 w-full rounded-t-full bg-black"></div>
          </div>
          <div className="relative opacity-60">
            <div className="p-2">Calendar</div>
            <div className="absolute bottom-0 hidden h-1 w-full rounded-t-full bg-black"></div>
          </div>
          <div className="relative opacity-60">
            <div className="p-2">Members</div>
            <div className="absolute bottom-0 hidden h-1 w-full rounded-t-full bg-black"></div>
          </div>
          <div className="relative opacity-60">
            <div className="p-2">About</div>
            <div className="absolute bottom-0 hidden h-1 w-full rounded-t-full bg-black"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
