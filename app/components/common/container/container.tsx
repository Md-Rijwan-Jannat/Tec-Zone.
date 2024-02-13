"use client";
import React, { ReactNode } from "react";
import Navbar from "../navBar/NavBar";
import { NavbarWithMegaMenu } from "../navLink/NavLink";
import Footer from "../footer/Footer";

export const margin_top = "mt-36 md:mt-44";

interface ContainerProps {
  children: ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black py-2 px-1 fixed z-[99999] w-full">
        <div className="container mx-auto ">
          <Navbar />
          <NavbarWithMegaMenu />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto mt-4 px-2">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-300 py-4 px-2">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Container;
