"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useLeadForm } from "@/context/LeadFormContext";

export default function LeadFormModal() {
  const { isOpen, closeForm, preselectedService } = useLeadForm();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [service, setService] = useState("");
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Sound Healing: Private (One on One)",
    "Sound Healing: Group (Event)",
    "Family Constellation: Private (One on One)",
    "Family Constellation: Group (Event)",
    "12-Week Transformation Program",
    "Retreat & Workshop",
    "Event: Family Constellation",
    "Event: Sound Bath",
    "Event: Qigong",
    "Event: Breath Work"
  ];

  // Sync preselected service from context
  useEffect(() => {
    if (preselectedService) {
      // Try to find matching option in services list
      const matched = services.find(s => 
        s.toLowerCase().includes(preselectedService.toLowerCase())
      );
      setService(matched || preselectedService);
    } else {
      setService("");
    }
  }, [preselectedService, isOpen]);

  // Clean form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setWhatsapp("");
      setErrors({});
    }
  }, [isOpen]);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!firstName.trim()) tempErrors.firstName = "First name is required";
    if (!lastName.trim()) tempErrors.lastName = "Last name is required";
    
    if (!email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email format";
    }

    if (!whatsapp.trim()) {
      tempErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^\+?[0-9\s\-()]{7,18}$/.test(whatsapp.trim())) {
      tempErrors.whatsapp = "Please enter a valid WhatsApp number";
    }
    
    if (!service) tempErrors.service = "Please select a service";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the WhatsApp message
    const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "61400000000"; // Default Perth, Australia format
    const greeting = `Hello Chariea Aviya Wellness, my name is ${firstName} ${lastName}.`;
    const interest = `I'm interested in booking ${service}.`;
    const contact = `My email is: ${email}\nMy WhatsApp number is: ${whatsapp}`;
    const closing = `Please let me know more, thank you 🙏`;
    
    const message = `${greeting}\n${interest}\n${contact}\n${closing}`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    // Mark as submitted
    setIsSubmitted(true);
    
    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      closeForm();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeForm}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-cream border border-nude/30 rounded-2xl shadow-xl p-5 sm:p-8 mx-4 z-10 luxury-transition">
        
        {/* Close Button */}
        <button 
          onClick={closeForm}
          className="absolute top-4 right-4 text-dark/60 hover:text-dark p-1.5 rounded-full hover:bg-nude/10 transition-colors"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-nude/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <CheckCircle2 className="w-10 h-10 text-nude" />
            </div>
            <h3 className="text-2xl font-heading font-light text-dark mb-3">Connecting to WhatsApp...</h3>
            <p className="font-body text-base text-dark/70 max-w-sm">
              Thank you, {firstName}. We are preparing your booking request. You will be redirected to WhatsApp to send the message.
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="font-sans text-xs uppercase tracking-widest text-[#803813] font-bold block mb-1">
                Booking Enquiry
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-light text-[#803813] leading-tight">
                Begin Your Journey
              </h3>
              <p className="font-body text-sm text-dark/70 mt-2">
                Fill in the details below to request a call or book a session. We'll connect with you on WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-dark/80 mb-1.5">
                    First Name <span className="text-nude">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`w-full px-4 py-3 bg-white-pure/80 border rounded-xl font-body text-base text-dark focus:outline-none focus:ring-1 focus:ring-nude/40 focus:border-nude transition-all ${
                      errors.firstName ? "border-nude/60 bg-nude/5" : "border-nude/20"
                    }`}
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 font-sans text-xs text-nude/80 font-medium">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-dark/80 mb-1.5">
                    Last Name <span className="text-nude">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`w-full px-4 py-3 bg-white-pure/80 border rounded-xl font-body text-base text-dark focus:outline-none focus:ring-1 focus:ring-nude/40 focus:border-nude transition-all ${
                      errors.lastName ? "border-nude/60 bg-nude/5" : "border-nude/20"
                    }`}
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 font-sans text-xs text-nude/80 font-medium">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-dark/80 mb-1.5">
                    Email Address <span className="text-nude">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 bg-white-pure/80 border rounded-xl font-body text-base text-dark focus:outline-none focus:ring-1 focus:ring-nude/40 focus:border-nude transition-all ${
                      errors.email ? "border-nude/60 bg-nude/5" : "border-nude/20"
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 font-sans text-xs text-nude/80 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="whatsapp" className="block font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-dark/80 mb-1.5">
                    WhatsApp Number <span className="text-nude">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className={`w-full px-4 py-3 bg-white-pure/80 border rounded-xl font-body text-base text-dark focus:outline-none focus:ring-1 focus:ring-nude/40 focus:border-nude transition-all ${
                      errors.whatsapp ? "border-nude/60 bg-nude/5" : "border-nude/20"
                    }`}
                    placeholder="e.g. +628123456789"
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 font-sans text-xs text-nude/80 font-medium">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label htmlFor="service" className="block font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-dark/80 mb-1.5">
                  Service / Session <span className="text-nude">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`w-full px-4 py-3 bg-white-pure/80 border rounded-xl font-sans text-xs uppercase tracking-wider font-semibold text-dark/80 appearance-none focus:outline-none focus:ring-1 focus:ring-nude/40 focus:border-nude transition-all ${
                      errors.service ? "border-nude/60 bg-nude/5" : "border-nude/20"
                    }`}
                  >
                    <option value="" disabled className="text-dark/40">Select a healing service</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-dark uppercase font-semibold">
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-dark/60">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
                {errors.service && (
                  <p className="mt-1 font-sans text-[11px] text-nude/80 font-medium">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 mt-6 py-4 bg-nude hover:bg-dark text-white-pure font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-colors duration-300 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
