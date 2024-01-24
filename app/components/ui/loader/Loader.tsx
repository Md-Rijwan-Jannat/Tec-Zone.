import React from "react";
import "./Loader.module.css";

export default function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
}
