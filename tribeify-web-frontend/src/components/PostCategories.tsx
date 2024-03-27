import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export default function PostCategories() {
  return (
    <div className="mb-2 flex items-center">
      <div className="flex w-full gap-4 overflow-auto py-4 [&>*]:whitespace-nowrap">
        <div className="rounded-full border-2 border-black bg-black px-4 py-1 text-white">
          All
        </div>
        <div className="rounded-full border-2 border-violet-200 px-4 py-1">
          Guides
        </div>
        <div className="rounded-full border-2 border-amber-200 px-4 py-1">
          Guides
        </div>
        <div className="rounded-full border-2 border-red-200 px-4 py-1">
          Health
        </div>
        <div className="rounded-full border-2 border-emerald-200 px-4 py-1">
          Discussion
        </div>
      </div>
      <div className="ml-2 rounded-full bg-white p-1.5">
        <AdjustmentsHorizontalIcon className="size-5 stroke-2" />
      </div>
    </div>
  );
}
