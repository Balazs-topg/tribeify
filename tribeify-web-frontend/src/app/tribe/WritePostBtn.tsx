import Image from "next/image";

export default function WritePostBtn() {
  return (
    <div className="mb-5 flex items-center rounded-2xl bg-white p-4">
      <Image
        className="size-10 rounded-full object-cover"
        alt=""
        width={100}
        height={100}
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></Image>
      <div className="ml-4 grow rounded-full border-2 border-stone-100 bg-white px-4 py-2 font-medium text-black/80">
        Write something interesting
      </div>
    </div>
  );
}
