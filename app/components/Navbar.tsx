"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "홈", href: "/" },
    { name: "회사 소개", href: "/about" },
    { name: "사업 영역", href: "/services" },
    { name: "문의하기", href: "/contact" },
  ];

  return (
    <nav className="bg-brand-grey border-b border-brand-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="flex items-end leading-none font-black text-3xl tracking-tighter">
                  <span className="text-white">L</span>
                  <span className="text-brand-gold text-4xl -mx-0.5 mb-[-2px]">A</span>
                  <span className="text-white">D</span>
                </div>
                <span className="text-[7px] text-gray-400 font-medium tracking-[0.1em] mt-1 whitespace-nowrap">건축에대한모든생각</span>
              </div>
              <div className="h-8 w-[1px] bg-brand-gold/30 mx-1"></div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-none mb-1">대광 건축</span>
                <span className="text-[9px] text-gray-400 uppercase tracking-widest leading-none">Living Architecture & Design</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gold hover:text-brand-gold-light focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-grey border-b border-brand-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
