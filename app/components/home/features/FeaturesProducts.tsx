// FeaturesProducts.tsx
import { FeaturesSlider } from "../../common/slider/FeaturesSlider/FeaturesSlider";
import Title from "../../ui/title/Title";

interface FeaturesProductsProps {}

export const FeaturesProducts: React.FC<FeaturesProductsProps> = () => {
  return (
    <div>
      <Title title={"New Features -"} />
      <section className="">
        <FeaturesSlider sliderId={"second"} />
      </section>
    </div>
  );
};
