"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useLeadForm } from "@/context/LeadFormContext";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

export default function Navbar() {
  const pathname = usePathname();
  const { openForm } = useLeadForm();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navigation: NavItem[] = [
    {
      label: "Sound Healing",
      dropdown: [
        { label: "Private (One on One)", href: "https://charieaaviyawellness.id/sb-training" },
        { label: "Group (Event)", href: "/sound-healing/group" },
      ],
    },
    {
      label: "Family Constellation",
      dropdown: [
        { label: "Private (One on One)", href: "/family-constellation/private" },
        { label: "Group (Event)", href: "/family-constellation/group" },
      ],
    },
    {
      label: "12-Week Program",
      href: "/12-week-program",
    },
    {
      label: "Retreat & Workshop",
      href: "https://charieaaviyawellness.id/retreat",
    },
    {
      label: "Events",
      dropdown: [
        { label: "Family Constellation", href: "/event/family-constellation" },
        { label: "Sound Bath", href: "https://www.trova.asia/floatingsb" },
        { label: "Qigong", href: "https://www.trova.asia/qigong" },
        { label: "Breath Work", href: "/event/breath-work" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdowns({});
  }, [pathname]);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center bg-white-pure/90 backdrop-blur-md shadow-sm border-b border-nude/10 ${
        scrolled ? "h-16" : "h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Chariea Aviya Wellness Logo"
            width={200}
            height={50}
            priority
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
          />
          <span className="font-sans text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-dark/90 leading-tight">
            Chariea Aviya<br />Wellness
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">
          {navigation.map((item) => {
            const hasDropdown = !!item.dropdown;
            const isActive = item.href ? pathname === item.href : false;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                {hasDropdown ? (
                  <button
                    className="flex items-center gap-1 font-sans text-xs uppercase tracking-wider font-semibold text-dark/80 hover:text-nude py-4 transition-colors duration-300 focus:outline-none cursor-pointer"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className={`font-sans text-xs uppercase tracking-wider font-semibold py-4 transition-colors duration-300 ${
                      isActive ? "text-nude" : "text-dark/80 hover:text-nude"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {hasDropdown && item.dropdown && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 mt-0 w-60 bg-white-pure border border-nude/20 rounded-xl shadow-lg p-2 transition-all duration-300 origin-top ${
                      activeDropdown === item.label
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col gap-0.5">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={`px-3.5 py-2.5 rounded-lg font-sans text-xs font-medium tracking-wide text-dark/70 hover:text-dark hover:bg-cream/60 transition-colors duration-200 ${
                            pathname === subItem.href ? "bg-cream/50 text-nude font-semibold" : ""
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => openForm()}
            className="flex items-center gap-2 px-5 py-2.5 bg-nude hover:bg-dark text-white-pure hover:text-cream font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-sm luxury-transition cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Book Call
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-dark p-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </header>

      {/* Mobile Navigation Drawer — rendered outside header for proper z-index stacking */}
      <div
        className={`lg:hidden fixed inset-x-0 bottom-0 bg-cream z-[60] transition-transform duration-300 ease-in-out border-t border-nude/10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: scrolled ? "64px" : "80px" }}
      >
        <div className="h-full overflow-y-auto px-6 py-6 flex flex-col justify-between">
          <div className="space-y-1">
            {navigation.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isSubOpen = mobileDropdowns[item.label];

              return (
                <div key={item.label} className="border-b border-nude/10 py-3">
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="flex items-center justify-between w-full font-sans text-sm uppercase tracking-wider font-semibold text-dark/95 focus:outline-none cursor-pointer"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 text-nude transition-transform duration-300 ${isSubOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div
                        className={`mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          isSubOpen ? "max-h-60 opacity-100 py-1" : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.dropdown?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`block font-sans text-xs font-semibold tracking-wide py-1.5 transition-colors ${
                              pathname === subItem.href ? "text-nude" : "text-dark/60 hover:text-nude"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "/"}
                      className={`block font-sans text-sm uppercase tracking-wider font-semibold transition-colors ${
                        pathname === item.href ? "text-nude" : "text-dark/95 hover:text-nude"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pb-20 sm:pb-12">
            <button
              onClick={() => {
                setIsOpen(false);
                openForm();
              }}
              className="flex items-center justify-center gap-2 w-full py-4 bg-nude hover:bg-dark text-white-pure font-sans text-sm font-bold tracking-widest uppercase rounded-full shadow-md transition-colors duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Book Free Discovery Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
