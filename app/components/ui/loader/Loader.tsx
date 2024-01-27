import React from "react";
import "./Loader.css";

export function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center max-h-max">
      <span className="loader"></span>
    </div>
  );
}
