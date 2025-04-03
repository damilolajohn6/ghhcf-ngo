import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full">
      <header className="fixed top-0 left-0 w-full bg-slate-50 shadow-md z-50 py-4 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <h1 className="text-4xl font-bold text-[#361D59]  md:block">GHHCF</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <Nav />
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <MobileNav />
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex items-center gap-4 space-x-2 text-white">
          <Link href="/contact" className="">
            <Button className="bg-[#BF1F77] text-md font-bold p-6">
              Contact Us
            </Button>
          </Link>

          <Link href="/donate">
            <Button className="bg-[#08C982] text-md font-bold p-6">
              Donate Now
            </Button>
          </Link>
        </div>
      </header>

      {/* Add spacing to avoid content being hidden under the sticky header */}
      <div className="h-20"></div>
    </div>
  );
};

export default Header;
