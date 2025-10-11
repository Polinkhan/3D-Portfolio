"use client";
import Link from "next/link";
import { useState } from "react";
import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="w-full h-[65px] fixed top-0 shadow-lg z-50 px-2 md:px-10 backdrop-blur-sm"
      aria-label="Main Navigation"
      role="navigation"
    >
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center" aria-label="Go to Polin Khan homepage">
          <h1 className="ml-[10px] text-gray-300 text-2xl font-bold tracking-wide">Polin Khan</h1>
        </Link>

        {/* Web Navbar */}
        <ul className="hidden lg:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <li className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer text-gray-50 hover:text-[rgb(112,66,248)] transition"
                aria-label={`Navigate to ${link.title}`}
              >
                {link.title}
              </Link>
            ))}
          </li>
        </ul>

        {/* Social Icons (Web) */}
        <div className="hidden lg:flex flex-row gap-5" aria-label="Social Media Links">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={`Visit Polin Khan on ${name}`}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 lg:hidden"
          role="menu"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={`Navigate to ${link.title}`}
                role="menuitem"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="View source code on GitHub"
              role="menuitem"
            >
              Source Code
            </Link>
          </div>

          {/* Social Icons */}
          <div
            className="flex justify-center gap-6 mt-6"
            aria-label="Social Media Links"
            role="group"
          >
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                aria-label={`Visit Polin Khan on ${name}`}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
