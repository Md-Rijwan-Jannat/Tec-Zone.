import Image from "next/image";
import React from "react";
import "./ArrivalCard.css";
import Link from "next/link";

interface ArrivalCardProps {
  image: any;
  product_name: any;
  description: any;
}

const ArrivalCard: React.FC<ArrivalCardProps> = ({
  image,
  product_name,
  description,
}) => {
  return (
    <div className="arrival md:w-full md:h-full m-2">
      <figure className="arrival__thumb pt-2">
        <Image
          width={1000}
          height={1200}
          src={image}
          alt="Picture by Nathan Dumlao"
          className="arrival__image w-full h-full"
        />
        <figcaption className="arrival__caption">
          <h2 className="arrival__title text-[13px] -mb-2 lg:mb-0">
            {product_name}
          </h2>
          <p className="arrival__snippet text-[8px] max-h-36">{description}</p>
          <Link href="#" className="arrival__button p-1 md:px-2 md:py-1">
            View Details
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default ArrivalCard;
