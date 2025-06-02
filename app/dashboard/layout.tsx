"use client";

import Sidebar from "./../../components/Sidebar";
import Header from "./../../components/Header";
import { NavigationProvider } from "./../../lib/context/navigation";
import { Authenticated } from "convex/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
      <div className="flex h-screen bg-gray-50">
        <Authenticated>
          <Sidebar />
        </Authenticated>

        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 overflow-y-auto bg-white">{children}</main>
        </div>
      </div>
    </NavigationProvider>
  );
}
