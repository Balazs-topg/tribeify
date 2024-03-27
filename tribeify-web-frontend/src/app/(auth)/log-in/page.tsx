import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white p-3">
        <div className="mx-auto flex w-full max-w-7xl items-center">
          <div className="flex flex-1 items-center gap-8">
            <strong className="text-xl font-bold">Tribeify</strong>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-sm px-4 py-24">
        <h1 className="mb-4 text-center text-xl font-bold">Log In</h1>
        <div className="space-y-2 rounded-2xl bg-white p-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Password</Label>
            <Input type="email" id="email" placeholder="Password" />
          </div>
          <div className=" pt-4">
            <Button className="w-full">Log in</Button>
          </div>
        </div>
        <div className="mt-4 text-center">
          Don&apos;t have an account? <Link href={"/sign-up"}>Sign up</Link>
        </div>
      </div>
    </>
  );
}
