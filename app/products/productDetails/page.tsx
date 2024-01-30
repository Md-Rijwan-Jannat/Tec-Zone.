import ProductSlider from "@/app/components/common/slider/productSlider/ProductSlider";
import { RelatedSlider } from "@/app/components/common/slider/relatedSlider/RelatedSlider";
import Title from "@/app/components/ui/title/Title";
import React from "react";
import { FaHome } from "react-icons/fa";

interface ProductsDetailsProps {
  // Define your component props here
}

const ProductsDetails: React.FC<ProductsDetailsProps> = () => {
  return (
    <div>
      <section>
        <div className="flex items-center justify-start gap-2 mt-3 md:mt-5">
          <FaHome />
          <span>
            {" / " +
              "Laptop" +
              " / " +
              "MackBook" +
              " / " +
              "MacBook Pro M1 Pro 14-inch 10-CPU 16-GPU"}
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <ProductSlider />
        </div>
        <div className="overflow-hidden">
          <Title title={"Related Products -"} />
          <RelatedSlider sliderId={"third"} />
        </div>
      </section>
    </div>
  );
};

export default ProductsDetails;
