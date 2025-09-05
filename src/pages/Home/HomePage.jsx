import { GlowingSuggestions } from "../../Components/GlowingSuggestions";
import { Header } from "../../Components/Header";
import { MarqueePictures } from "./MarqueePictures";
import { ReusableProductsContainer } from "../../Components/ReusableProductsContainer";
import {
  products,
  productsMore,
  productsMoreLast,
} from "../../../data/products";
import { GlowingSuggestionsRight } from "../../Components/GlowingSuggestionsRight";
import { BentoGrid } from "./BentoGrid";

export function HomePage({ totalQuantity }) {
  return (
    <>
      <title>RSNB</title>
      <Header totalQuantity={totalQuantity} />
      <MarqueePictures />
      <ReusableProductsContainer products={products} />
      <GlowingSuggestions />
      <GlowingSuggestionsRight />
      <ReusableProductsContainer products={productsMore} />
      <ReusableProductsContainer products={productsMoreLast} />

      {/* <BentoGrid /> */}
    </>
  );
}
