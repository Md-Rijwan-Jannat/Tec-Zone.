import Image from "next/image";
import React from "react";
import "./ArrivalCard.css";
import { product1 } from "../../assets/products/products";

export default function ArrivalCard() {
  return (
    <div className="arrival">
      <figure className="arrival__thumb">
        <Image
          width={100}
          height={100}
          src={
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/4516272/1.jpg?5376"
          }
          alt="Picture by Nathan Dumlao"
          className="arrival__image w-[350px] h-[400px]"
        />
        <figcaption className="arrival__caption">
          <h2 className="arrival__title">
            This Is Your Body And Brain On Coffee
          </h2>
          <p className="arrival__snippet">
            Drinking more caffeine during the coronavirus lockdown? Here is how
            it can affect you over time and advice on making it better for you.
          </p>
          <a href="" className="arrival__button">
            Read more
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
