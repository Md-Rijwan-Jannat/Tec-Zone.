import Image from "next/image";
import React from "react";
import "./ArrivalCard.css";
import Link from "next/link";

export default function ArrivalCard() {
  return (
    <div className="arrival md:w-full md:h-full m-2">
      <figure className="arrival__thumb pt-2">
        <Image
          width={1000}
          height={1200}
          src={
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/4516272/1.jpg?5376"
          }
          alt="Picture by Nathan Dumlao"
          className="arrival__image w-full h-full"
        />
        <figcaption className="arrival__caption">
          <h2 className="arrival__title text-[13px] -mb-2 lg:mb-0">
            i Phone 15 Pro Max Titanium
          </h2>
          <p className="arrival__snippet text-[8px] max-h-36">
            Drinking more caffeine during the coronavirus lockdown? Here is how
            it can affect you over time and advice on making it better for you.
          </p>
          <Link href="#" className="arrival__button p-1 md:px-2 md:py-1">
            Vew Details
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}
