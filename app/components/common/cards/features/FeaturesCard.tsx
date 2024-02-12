import Image from "next/image";
import React from "react";
import "./FeaturesCard.css";
import Link from "next/link";

interface FeaturesCardProps {
  image: any;
  product_name: any;
  description: any;
}

export const FeaturesCard: React.FC<FeaturesCardProps> = ({
  image,
  product_name,
  description,
}) => {
  return (
    <div className="features md:w-full md:h-full m-2">
      <figure className="features__thumb pt-2">
        <Image
          width={1000}
          height={1200}
          src={image}
          alt="Picture by Nathan Dumlao"
          className="features__image w-full h-full"
        />
        <figcaption className="features__caption">
          <h2 className="features__title text-[13px] -mb-2 lg:mb-0">
            {product_name}
          </h2>
          <p className="features__snippet text-[8px] max-h-36">{description}</p>
          <Link
            href="/products/productDetails"
            className="features__button p-1 md:px-2 md:py-1"
          >
            View Details
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};
