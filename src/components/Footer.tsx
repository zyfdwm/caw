"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { useLeadForm } from "@/context/LeadFormContext";

export default function Footer() {
  const { openForm } = useLeadForm();

  return (
    <footer className="bg-white-pure text-dark font-body border-t border-nude/20">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt="Chariea Aviya Wellness Logo"
                  width={200}
                  height={50}
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
                />
                <span className="font-sans text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-dark/90 leading-tight">
                  Chariea Aviya<br />Wellness
                </span>
              </Link>
              <p className="mt-6 font-body text-base text-dark/70 italic max-w-sm leading-relaxed">
                Nourishing your soul, resolving generational patterns, and restoring balance from within.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="https://www.instagram.com/chariea_aviyawellness/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-nude/30 flex items-center justify-center text-dark/70 hover:text-white-pure hover:bg-nude hover:border-nude transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a 
                href="https://web.facebook.com/vibrantwellnessstudio?_rdc=1&_rdr#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-nude/30 flex items-center justify-center text-dark/70 hover:text-white-pure hover:bg-nude hover:border-nude transition-all duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a 
                href="mailto:info@charieaaviyawellness.id" 
                className="w-10 h-10 rounded-full border border-nude/30 flex items-center justify-center text-dark/70 hover:text-white-pure hover:bg-nude hover:border-nude transition-all duration-300 cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Clinics Addresses */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-nude mb-4">
                Main Clinic (Perth)
              </h4>
              <p className="font-body text-base text-dark/80 leading-relaxed">
                25 Northampton Street,<br />
                East Victoria Park, WA 6101<br />
                Australia
              </p>
              <span className="inline-block mt-3 text-xs font-sans text-nude font-medium underline underline-offset-4">
                By Appointment Only
              </span>
            </div>

            <div>
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-nude mb-4">
                Home Clinic (Bali)
              </h4>
              <p className="font-body text-base text-dark/80 leading-relaxed">
                Jalan Tukad Musi IV No.1B, Panjer,<br />
                Kecamatan Denpasar Selatan,<br />
                Bali 80234, Indonesia
              </p>
              <span className="inline-block mt-3 text-xs font-sans text-nude font-medium underline underline-offset-4">
                By Appointment Only
              </span>
            </div>
          </div>

          {/* Quick Links / Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-nude mb-4">
              Explore Services
            </h4>
            <div className="flex flex-col gap-3 font-sans text-xs uppercase tracking-wider font-semibold text-dark/70">
              <Link href="https://charieaaviyawellness.id/sb-training" className="hover:text-nude flex items-center gap-1 group">
                Sound Healing 1:1 <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/family-constellation/private" className="hover:text-nude flex items-center gap-1 group">
                Family Constellation 1:1 <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/12-week-program" className="hover:text-nude flex items-center gap-1 group">
                12-Week Program <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="https://charieaaviyawellness.id/retreat" className="hover:text-nude flex items-center gap-1 group">
                Retreats & Workshops <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <button 
                onClick={() => openForm()}
                className="text-left hover:text-nude flex items-center gap-1 group focus:outline-none uppercase font-semibold cursor-pointer"
              >
                Book Discovery Call <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-nude/10 py-8 bg-cream/35">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-dark/50">
            &copy; {new Date().getFullYear()} Chariea Aviya Wellness. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-xs text-dark/50">
            <Link href="/" className="hover:text-nude">Privacy Policy</Link>
            <Link href="/" className="hover:text-nude">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
