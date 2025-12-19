import { UserButton } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/layout/mode-toggle";

export default function Header() {
  return (
    <div className={"flex justify-between max-w-7xl mx-auto p-4"}>
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Vinr B2B</span>
        <Image alt="Logo" src={"/img/logo.svg"} height={32} width={84} />
      </Link>
      <div className={"flex items-center gap-2"}>
        <ModeToggle />
        <UserButton size={"icon"} align={"end"} />
      </div>
    </div>
  );
}
