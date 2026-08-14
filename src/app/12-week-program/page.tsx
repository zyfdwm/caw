"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-dark">
      {/* Hero Header */}
      <section className="flex-1 flex flex-col justify-center items-center px-6 py-24 text-center max-w-4xl mx-auto">
        <span className="font-sans uppercase tracking-widest text-xs text-nude font-semibold mb-4">
          Chariea Aviya Wellness
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-light tracking-wide mb-6 leading-tight text-dark">
          12-Week Transformation Program
        </h1>
        <p className="text-xl font-body italic text-dark/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          A bespoke multi-dimensional healing container combining hypnotherapy, sound healing, and mentorship.
        </p>

        {/* Coming Soon Notice */}
        <div className="bg-white-pure/50 backdrop-blur-sm border border-nude/20 rounded-2xl p-8 md:p-12 max-w-lg mx-auto shadow-sm">
          <p className="font-sans text-xs tracking-widest text-nude font-semibold mb-3 uppercase">
            Service Page Revamp In Progress
          </p>
          <p className="font-body text-base text-dark/70 mb-6">
            We are currently crafting a detailed, premium description for this offering. If you are interested in booking or learning more, please reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white-pure hover:bg-cream border border-nude text-nude hover:text-dark font-sans text-xs font-semibold tracking-widest uppercase luxury-transition shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/?openForm=true"
              className="px-6 py-3 bg-nude hover:bg-dark text-white-pure hover:text-cream font-sans text-xs font-semibold tracking-widest uppercase luxury-transition shadow-md"
            >
              Book Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
