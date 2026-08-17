"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface LeadFormContextType {
  isOpen: boolean;
  openForm: (service?: string) => void;
  closeForm: () => void;
  preselectedService: string;
}

const LeadFormContext = createContext<LeadFormContextType | undefined>(undefined);

export function LeadFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const openForm = useCallback((service?: string) => {
    if (service) {
      setPreselectedService(service);
    }
    setIsOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    setIsOpen(false);
    setPreselectedService("");
  }, []);

  return (
    <LeadFormContext.Provider value={{ isOpen, openForm, closeForm, preselectedService }}>
      {children}
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const context = useContext(LeadFormContext);
  if (!context) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return context;
}
