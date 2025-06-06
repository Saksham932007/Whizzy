import React, { ReactNode } from "react";
import Header from "./../../components/Header1";
import Footer from "./../../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const theme: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default theme;
