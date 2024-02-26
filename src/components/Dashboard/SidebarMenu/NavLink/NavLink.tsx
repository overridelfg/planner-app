"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  content: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ content, href }) => {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={`font-medium text-lg ${currentPath === href ? "text-primary" : "text-white"}`}
      prefetch={true}
    >
      {content}
    </Link>
  );
};

export default NavLink;
