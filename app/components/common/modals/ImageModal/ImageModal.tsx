"use client";
import Image from "next/image";
import React from "react";

interface ImageModalProps {
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl }) => {
  return (
    <div>
      <button
        data-ripple-light="true"
        data-dialog-target="dialog-sm"
        className="active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <Image
          width={1000}
          height={1000}
          alt="Product Image"
          src={imageUrl}
          className="w-9/12 md:w-[300px] lg:w-[400px] aspect-square object-cover rounded-xl"
        />
      </button>
      <div
        data-dialog-backdrop="dialog-sm"
        data-dialog-backdrop-close="true"
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="dialog-sm"
          className="relative m-4 w-1/3 min-w-[33.333333%] max-w-[33.333333%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
        >
          <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
            <Image
              width={1000}
              height={1000}
              alt="Product Image"
              src={imageUrl}
            />
          </div>

          <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
            <button
              data-ripple-dark="true"
              data-dialog-close="true"
              className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Cancel
            </button>
            <button
              data-ripple-light="true"
              data-dialog-close="true"
              className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
