import Image from "next/image";
import React from "react";
import "./ArrivalCard.css";
import Link from "next/link";

export default function ArrivalCard() {
  return (
    <div className="arrival">
      <figure className="arrival__thumb">
        <Image
          width={1000}
          height={1200}
          src={
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/4516272/1.jpg?5376"
          }
          alt="Picture by Nathan Dumlao"
          className="arrival__image w-full h-[300px]"
        />
        <figcaption className="arrival__caption">
          <h2 className="arrival__title">i Phone 15 Pro Max Titanium</h2>
          <p className="arrival__snippet">
            Drinking more caffeine during the coronavirus lockdown? Here is how
            it can affect you over time and advice on making it better for you.
          </p>
          <Link href="#" className="arrival__button">
            Vew Details
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}
