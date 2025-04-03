"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/profile", label: "Our Profile" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog Post" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex text-[#361D59] gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`capitalize font-bold transition-all  ${
            link.href === pathname
              ? " border-b-2 border-[#BF1F77]"
              : "hover:text-[#08C982]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
