import React from "react";
import Loader from "./components/ui/loader/Loader";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
}
