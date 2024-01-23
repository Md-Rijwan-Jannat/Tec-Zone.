"use client";
import React, { ReactNode } from "react";
import Navbar from "../navBar/NavBar";
import { NavbarWithMegaMenu } from "../navLink/NavLink";

interface ContainerProps {
  children: ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black py-2 px-1">
        <div className="container mx-auto">
          <Navbar />
          <NavbarWithMegaMenu />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto mt-4 px-2">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-300 py-4 px-2">
        <div className="container mx-auto">
          {/* Your footer content goes here */}
          <p>&copy; 2024 E-Commerce Site. All rights reserved.</p>
          {/* Add links or other footer components */}
        </div>
      </footer>
    </div>
  );
};

export default Container;
