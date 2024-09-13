import { Funnel } from "@phosphor-icons/react";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-screen  flex items-center justify-center">
      <div className="w-full max-w-[95vw] md:max-w-[90vw] py-4">
        <div className="flex items-center">
          <Funnel size={24} />
          <h1 className="font-bold text-md">
            <Link href="/home-page">Sort App</Link>
          </h1>
        </div>
        <div />
      </div>
    </header>
  );
}
