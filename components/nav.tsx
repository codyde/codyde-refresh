"use client";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import {
  SheetTrigger,
  SheetClose,
  SheetContent,
  Sheet,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useFlags } from "launchdarkly-react-client-sdk";
import { ModeToggle } from "./ThemeToggle";
// import LDSDK from "@/utils/ldserver
const serverContext = {
  kind: "user",
  key: Math.random().toString(36).substr(2, 4),
  name: "Blog User",
};

const Nav = async () => {
  const { bbqnav, aboutnav } = useFlags();
  return (
    <header className=" h-full">
      <Sheet>
        <SheetTrigger className="" asChild>
          <Button className="lg:hidden" variant="menuicon">
            <IoMenuOutline size={36} />
            <p className="text-lg pl-2 uppercase">codyde.io</p>
          </Button>
        </SheetTrigger>
        <SheetContent className="" side="left">
          <div className="flex items-center px-6 py-4 space-x-4">
            <SheetClose asChild>
              <Button size="icon" variant="ghost">
                <IoMenuOutline size={36} />
              </Button>
            </SheetClose>
            <ModeToggle />
          </div>
          <div className="grid gap-4 py-6 px-6">
            <SheetClose asChild>
              <Link
                className="text-4xl dark:text-white text-black font-bold pb-8"
                href="/"
              >
                Home
              </Link>
            </SheetClose>
            {aboutnav && (
              <SheetClose asChild>
                <Link
                  className="text-4xl dark:text-white text-black font-bold"
                  href="/about"
                >
                  About
                </Link>
              </SheetClose>
            )}
            <SheetClose asChild>
              <Link
                className="text-4xl dark:text-white text-black font-bold"
                href="/blog"
              >
                Blog
              </Link>
            </SheetClose>
            {bbqnav && (
              <SheetClose asChild>
                <Link
                  className="text-4xl dark:text-white text-black font-bold"
                  href="/bbq"
                >
                  BBQ
                </Link>
              </SheetClose>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <nav className="hidden lg:flex absolute  top-10 w-full dark:text-white text-black justify-between">
        <Link href="/">
          <div className="flex items-center ml-16 dark:text-white text-black">
            <FaLaptopCode size={30} />
            <p className="text-2xl font-semibold ml-2 uppercas">
              Cody De Arkland
            </p>
          </div>
        </Link>
        <div className="flex flex-row mr-16 text-2xl space-x-4 dark:text-white text-black">
          {aboutnav && <p>About</p>}
          <Link className="dark:text-white text-black" href="/blog">
            Blog
          </Link>
          {bbqnav && <p>BBQ</p>}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
