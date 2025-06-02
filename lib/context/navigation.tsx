"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface NavigationContextType {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => setIsMobileNavOpen(false);
  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);

  return (
    <NavigationContext.Provider
      value={{
        isMobileNavOpen,
        setIsMobileNavOpen,
        closeMobileNav,
        toggleMobileNav,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
