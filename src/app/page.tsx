"use client";

import React, { useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Brain,
  Heart,
  Activity,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadFormModal from "@/components/LeadFormModal";
import { useLeadForm } from "@/context/LeadFormContext";

function HomepageContent() {
  const { openForm } = useLeadForm();
  const searchParams = useSearchParams();

  // Handle opening form from query params (e.g. from service subpages link)
  useEffect(() => {
    if (searchParams.get("openForm") === "true") {
      const service = searchParams.get("service") || "";
      openForm(service);
    }
  }, [searchParams, openForm]);

  const transformExperiences = [
    "Uncover and release subconscious blocks holding you back",
    "Heal generational and ancestral traumas that influence your life",
    "Restore balance between mind, body, and soul through holistic healing",
    "Develop self-awareness, self-love, and emotional resilience",
    "Learn practical techniques to sustain long-term transformation"
  ];

  const whoIsThisFor = [
    "Feel stuck in emotional patterns, self-doubt, or limiting beliefs",
    "Struggle with relationship dynamics and want to heal family or ancestral wounds",
    "Experience stress, overwhelm, or energetic imbalances and seek holistic healing",
    "Want to cultivate a deeper sense of self-awareness, confidence, and peace"
  ];

  const whatsIncluded = [
    {
      title: "Tailored Healing Sessions",
      desc: "Experience diverse modalities like Kinesiology, Hypnotherapy, Sound Therapy, Breathwork, and Family Constellation, tailored to meet your challenges and goals."
    },
    {
      title: "Self-Healing Tools",
      desc: "Discover practical techniques like breathwork, grounding, EFT tapping, self-hypnosis, nutrition, heart coherence, homeopathy, and tips to support healing and maintain well-being."
    },
    {
      title: "Private 1:1 Sessions",
      desc: "One on one session for deep personalized healing, providing a safe container for profound shifts."
    },
    {
      title: "Group Healing Sessions",
      desc: "Join group sessions to connect, release, and grow in a safe, supportive community. Experience the collective power of healing."
    },
    {
      title: "Personalised Audio Recording",
      desc: "Self-hypnosis, meditation, and sound healing recordings to aid your healing journey and transformation."
    },
    {
      title: "Progress Tracking",
      desc: "Worksheets & check-ins to keep you consistent, aligned, and motivated on your path."
    },
    {
      title: "Wellness Guidance",
      desc: "Essential, functional advice on nutrition, gut health, lifestyle alignment, and detoxification."
    }
  ];

  const certifications = [
    { category: "Kinesiology", name: "Advance Diploma of Functional Kinesiology (3 Years Full Time Study)" },
    { category: "Kinesiology", name: "Brain Integration - LEAP Training (1 Year Study)" },
    { category: "Sound Healing", name: "Master of Sound Therapy - Australian College of Sound Therapy (2 Years Full Time Study)" },
    { category: "Hypnotherapy", name: "RTT Hypnotherapist (Rapid Transformational Therapy & Past Life Regression)" },
    { category: "Systemic Work", name: "Family Constellation Practitioner (1 Year Study)" },
    { category: "Breathwork", name: "Breathwork Facilitator Certification (Advanced Practitioner)" },
    { category: "Somatic Heart", name: "Heart Math Practitioner" },
    { category: "Academia", name: "Bachelor of Commerce at Curtin University in WA" },
    { category: "Energy Healing", name: "Reiki I & II Practitioner" },
    { category: "Intuitive Modalities", name: "Tarot Certification" },
    { category: "Energy Movement", name: "Qi Gong Practitioner" }
  ];

  const services = [
    {
      title: "12-Week Transformation Program",
      subtitle: "Comprehensive Subconscious & Energetic Healing Journey",
      desc: "An intensive, custom-tailored multi-dimensional container combining hypnotherapy, kinesiology, sound healing, and systemic constellation work for deep, lasting transformation.",
      format: "Online & In-Person Integration",
      image: "/service-transformation.png",
      href: "/12-week-program"
    },
    {
      title: "Family Constellation",
      subtitle: "Resolving Generational & Ancestral Trauma",
      desc: "Discover the hidden dynamics in your family system. Release blockages, address recurring life patterns, and heal generational wounds in private 1:1 or group settings.",
      format: "One on One & Group workshops (Online/Face-to-Face)",
      image: "/service-constellation.png",
      href: "/family-constellation/private"
    },
    {
      title: "Advanced Sound Healing",
      subtitle: "Vibrational Realignment & Sound Baths",
      desc: "Experience deep relaxation and energetic frequency realignment. Combining therapeutic sound bath meditations, training courses, and personalized vibrational work.",
      format: "Private (Bali) & Group Events (Perth & Bali)",
      image: "/service-sound.png",
      href: "https://charieaaviyawellness.id/sb-training"
    },
    {
      title: "Retreat & Workshops",
      subtitle: "Immersive Healing in Sacred Locations",
      desc: "Escape your daily environment to deep dive into restoration and healing. Join our hosted retreats and intensive weekend workshops in Perth, Bali, and Bandung.",
      format: "Perth, Bali & Bandung (Check Events Calendar)",
      image: "/service-retreat.png",
      href: "https://charieaaviyawellness.id/retreat"
    }
  ];

  const testimonials = [
    {
      quote: "I felt an immediate shift after my first Family Constellation session. Chariea holds such a safe, sacred space. I finally released a heavy emotional pattern I had carried for years.",
      author: "Sarah M.",
      location: "Perth, WA"
    },
    {
      quote: "The 12-Week program completely rewired how I view myself. The combination of hypnotherapy, kinesiology, and sound healing was magical. I've gained absolute clarity and peace.",
      author: "David K.",
      location: "Bali, Indonesia"
    },
    {
      quote: "Chariea's sound bath events are out of this world. It is deep rest and profound healing combined. I felt vibrational alignment instantly.",
      author: "Michelle L.",
      location: "Bandung, Indonesia"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row max-w-full overflow-hidden bg-cream pt-20">
        {/* Left: Image */}
        <div className="flex-1 relative min-h-[50vh] md:min-h-screen">
          <Image
            src="/hero-image.png"
            alt="Chariea Aviya Wellness Hero"
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: Intro Text */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 sm:px-8 sm:py-16 md:p-16 lg:p-24 text-center md:text-left md:items-start bg-cream">
          <span className="font-sans text-l uppercase tracking-[0.25em] text-[#803813] font-bold mb-4">
            Chariea Aviya Wellness
          </span>
          <p className="font-body text-lg sm:text-xl md:text-2xl italic text-dark/90 leading-relaxed mb-6 max-w-lg">
            "Transform your life with holistic healing, subconscious work, and energy alignment."
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#803813] font-normal tracking-wide leading-tight mb-8">
            Beyond the Surface,<br />Nourishing Your Soul
          </h1>
          <button
            onClick={() => openForm()}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-nude hover:bg-dark text-white-pure hover:text-cream font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-md hover:shadow-lg luxury-transition cursor-pointer"
          >
            Book Free 20 Min Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 12-Week Transformation Program Section */}
      <section className="bg-white-pure py-20 md:py-28 px-6 border-b border-nude/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#803813] font-bold block mb-3">
              Deep Transformational Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-[#803813] mb-6">
              The 12-Week Transformation
            </h2>
            <p className="font-body text-lg md:text-xl italic text-dark/80 max-w-3xl mx-auto leading-relaxed">
              is a personalized healing journey aimed at breaking limiting patterns and healing emotional and ancestral wounds. It combines hypnotherapy, kinesiology, sound therapy, homeopathy, breathwork, and family constellation to facilitate lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Experience Box */}
            <div className="bg-cream/40 border border-nude/20 rounded-3xl p-8 lg:p-10 shadow-sm">
              <h3 className="font-heading text-xl md:text-2xl font-medium text-[#803813] mb-6">
                What You’ll Experience
              </h3>
              <ul className="space-y-4">
                {transformExperiences.map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-nude/20 text-[#803813] shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-body text-base text-dark/80 leading-relaxed">
                      {exp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience Box */}
            <div className="bg-cream/40 border border-nude/20 rounded-3xl p-8 lg:p-10 shadow-sm">
              <h3 className="font-heading text-xl md:text-2xl font-medium text-[#803813] mb-6">
                Who Is This For?
              </h3>
              <ul className="space-y-4">
                {whoIsThisFor.map((who, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-nude/20 text-nude shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-body text-base text-dark/80 leading-relaxed">
                      {who}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-cream/25 py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#803813] font-bold block mb-3">
              Comprehensive Support
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-[#803813] mb-4">
              What’s Included
            </h2>
            <p className="font-body text-base italic text-dark/70">
              A comprehensive healing experience designed for lasting transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left: Featured Focus Card */}
            <div className="lg:col-span-1 bg-white-pure border border-nude/15 rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#803813] block mb-3">
                  Core Modality
                </span>
                <h3 className="font-sans text-sm sm:text-base uppercase tracking-wider font-semibold text-[#803813] mb-4">
                  {whatsIncluded[0].title}
                </h3>
                <p className="font-body text-base text-dark/90 italic leading-relaxed">
                  {whatsIncluded[0].desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-nude/15 font-sans text-[11px] uppercase tracking-wider text-[#803813]/80 font-medium">
                Personalized & Multidimensional
              </div>
            </div>

            {/* Right: 6 Complementary Cards in 2 Columns */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {whatsIncluded.slice(1).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white-pure border border-nude/15 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#803813] mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-dark/85 italic leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Chariea Section */}
      <section className="bg-cream/65 py-20 md:py-28 px-6 border-y border-nude/10">
        <div className="max-w-6xl mx-auto">
          {/* Top: Bio & Image Side-by-Side (Normal scroll, non-sticky) */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left image column */}
            <div className="flex-1 w-full">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-nude/20">
                <Image
                  src="/chariea-portrait.png"
                  alt="Chariea Portrait"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right bio text column */}
            <div className="flex-1">
              <span className="font-sans text-xs uppercase tracking-widest text-[#803813] font-bold block mb-3">
                Your Facilitator
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#803813] mb-6 leading-tight">
                Meet Chariea
              </h2>
              <p className="font-body text-base leading-relaxed text-dark/95 mb-6">
                I am a <strong className="font-semibold text-[#803813]">hypnotherapist, kinesiologist, sound therapist, and Family Constellation facilitator</strong> based in Perth, Western Australia, specializing in holistic healing and transformation.
              </p>
              <p className="font-body text-base leading-relaxed text-dark/95 mb-8">
                My unique approach addresses root causes of emotional patterns and subconscious blocks, helping clients to:
              </p>

              {/* 2x2 Focus Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Reprogram Beliefs", desc: "Rewiring limiting subconscious programs to create deep-seated behavioral shifts." },
                  { title: "Heal Ancestral Trauma", desc: "Systemic resolution circles to trace and release inherited generational blocks." },
                  { title: "Restore Energetic Flow", desc: "Integrative methods balancing body frequency using kinesiology and sound healing." },
                  { title: "Reconnect with Body", desc: "Deepening your somatic connection and listening to your body's innate wisdom." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white-pure/80 border border-nude/15 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#803813] font-bold block mb-1">
                      Pillar {idx + 1}
                    </span>
                    <h4 className="font-heading text-base font-medium text-[#803813] mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-dark/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="font-body text-base leading-relaxed text-dark/90">
                Each session aims to create lasting shifts in mind, body, and energy, guiding clients toward inner peace, confidence, and renewed purpose.
              </p>
            </div>
          </div>

          {/* Bottom: Certifications & Training (Full Width Spacious 3-Column Grid) */}
          <div className="mt-16 pt-12 border-t border-nude/20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-sans text-xs uppercase tracking-widest text-[#803813] font-bold block mb-2">
                Qualifications & Credentials
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-[#803813] flex items-center justify-center gap-2.5">
                <Award className="w-6 h-6 text-[#803813]" />
                Certifications & Training
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex gap-3.5 items-start bg-white-pure/70 hover:bg-white-pure border border-nude/15 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-[#803813] mt-2 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#803813] font-bold leading-none mb-1.5">
                      {cert.category}
                    </span>
                    <span className="font-body text-sm text-dark/90 leading-relaxed font-medium">
                      {cert.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transform From Within Section */}
      <section className="bg-white-pure py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#803813] font-bold block mb-3">
              An Integrative Method
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-[#803813] mb-6">
              Transform From Within
            </h2>
            <p className="font-body text-lg md:text-xl italic text-dark/80 max-w-3xl mx-auto leading-relaxed mb-6">
              "Healing is more than just addressing symptoms; it's about uncovering the deeper layers of who you are, releasing old patterns, and realigning with your true self."
            </p>
            <div className="font-body text-base text-dark/70 max-w-2xl mx-auto space-y-4">
              <p>
                My journey into holistic healing began with my own desire to break free from emotional cycles that kept me stuck. Through deep self-exploration and training in powerful healing modalities, I discovered the profound impact of working with the mind, body, and energy system together.
              </p>
              <p>
                Whether you're feeling stuck in emotional patterns, struggling with relationships, or seeking a deeper connection to yourself, my goal is to provide the tools and support to help you move forward with clarity and confidence.
              </p>
            </div>
          </div>

          {/* 3-Column Mind Body Energy */}
          <h3 className="text-center font-sans text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#803813] mb-8">
            My Approach to Healing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Mind */}
            <div className="bg-cream/25 border border-nude/15 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#803813]/20 rounded-full flex items-center justify-center mx-auto mb-5 text-[#803813]">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#803813] mb-3">
                Mind
              </h4>
              <p className="font-body text-sm sm:text-base text-dark/85 leading-relaxed">
                Releasing subconscious blocks, rewiring thought patterns, and cultivating self-awareness.
              </p>
            </div>

            {/* Body */}
            <div className="bg-cream/25 border border-nude/15 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#803813]/20 rounded-full flex items-center justify-center mx-auto mb-5 text-[#803813]">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#803813] mb-3">
                Body
              </h4>
              <p className="font-body text-sm sm:text-base text-dark/85 leading-relaxed">
                Understanding how emotions manifest physically, restoring balance, and supporting holistic wellness.
              </p>
            </div>

            {/* Energy */}
            <div className="bg-cream/25 border border-nude/15 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#803813]/20 rounded-full flex items-center justify-center mx-auto mb-5 text-[#803813]">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#803813] mb-3">
                Energy
              </h4>
              <p className="font-body text-sm sm:text-base text-dark/85 leading-relaxed">
                Clearing energetic blocks, aligning frequencies, and accessing deep-seated wisdom within.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Credibility Section */}
      <section className="bg-cream/20 py-16 px-6 border-y border-nude/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#803813] font-bold block mb-2">
              Credibility & Standards
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-[#803813]">
              Why Work With Me?
            </h2>
            <p className="font-body text-base italic text-dark/70 mt-2 max-w-md mx-auto">
              Unlike traditional approaches that focus solely on one aspect of healing, I provide an integrated experience that helps you align fully.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16">
            {/* RTT */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3">
                <Image
                  src="/rtt-transparent.png"
                  alt="RTT Certified Practitioner"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain drop-shadow-sm"
                  unoptimized
                />
              </div>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-dark/80 text-center">
                Certified Practitioner
              </p>
            </div>

            {/* IICT */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3">
                <Image
                  src="/iict-transparent.png"
                  alt="Member of IICT"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain drop-shadow-sm"
                  unoptimized
                />
              </div>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-dark/80 text-center">
                Member of IICT
              </p>
            </div>

            {/* Google Reviews */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3">
                <Image
                  src="/google-review-transparent.png"
                  alt="4.9 Google Reviews"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain drop-shadow-sm"
                  unoptimized
                />
              </div>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-dark/80 text-center">
                Google Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Services Section */}
      <section className="bg-white-pure py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#803813] font-bold block mb-3">
              Offerings
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-[#803813] mb-4">
              Healing Services
            </h2>
            <p className="font-body text-base italic text-dark/75">
              Choose the healing path that resonates with you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-cream/10 border border-nude/20 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[240px]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Service Info */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-heading text-xl md:text-2xl font-medium text-[#803813] mb-1">
                      {svc.title}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-[#803813] font-semibold mb-4">
                      {svc.subtitle}
                    </p>
                    <p className="font-body text-sm sm:text-base text-dark/85 leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-dark/70 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-nude" />
                      {svc.format}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-0 flex gap-4">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#803813] hover:text-dark transition-colors duration-300 cursor-pointer"
                  >
                    Learn More
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-cream/35 py-20 md:py-28 px-6 border-t border-nude/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#803813] font-bold block mb-3">
              Shared Journeys
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-[#803813] mb-4">
              Client Testimonials
            </h2>
            <p className="font-body text-base italic text-dark/75">
              What our clients say about their transformation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden group bg-white-pure/60 hover:bg-white-pure/95 border border-nude/15 rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Large decorative quotation mark */}
                <span className="absolute top-2 right-4 text-7xl font-heading text-nude/10 select-none pointer-events-none group-hover:scale-110 group-hover:text-nude/15 transition-all duration-500">
                  “
                </span>

                <div className="relative z-10">
                  {/* Star Ratings */}
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-nude text-nude/80 transition-transform duration-300 group-hover:scale-110" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="font-body text-sm sm:text-base text-dark/85 italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="relative z-10 border-t border-nude/10 pt-4 flex items-center justify-between mt-auto">
                  <span className="font-sans text-xs sm:text-sm uppercase tracking-wider font-bold text-dark">
                    {t.author}
                  </span>
                  <span className="font-sans text-[11px] text-[#803813] uppercase tracking-wider font-semibold">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Final Call to Action Block */}
          <div className="mt-16 sm:mt-20 text-center bg-white-pure border border-nude/20 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl md:text-4xl font-medium text-[#803813] mb-4">
              Are you ready to transform?
            </h3>
            <p className="font-body text-base text-dark/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Take the first step towards resolving emotional blocks and generational wounds. Book your complimentary 20-minute discovery call with Chariea today.
            </p>
            <button
              onClick={() => openForm()}
              className="w-full sm:w-auto px-8 py-4 bg-nude hover:bg-dark text-white-pure hover:text-cream font-sans text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-full shadow-md hover:shadow-lg luxury-transition cursor-pointer"
            >
              Schedule Your Free Call Now
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Form Modal */}
      <LeadFormModal />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center font-heading text-2xl font-light tracking-widest text-nude animate-pulse">
          CHARIEA AVIYA...
        </div>
      </div>
    }>
      <HomepageContent />
    </Suspense>
  );
}
