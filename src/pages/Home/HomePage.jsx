// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import { GlowingSuggestions } from "../../Components/GlowingSuggestions";
import { Header } from "../../Components/Header";
import { MarqueePictures } from "./MarqueePictures";
import { ReusableProductsContainer } from "../../Components/ReusableProductsContainer";
import { GlowingSuggestionsRight } from "../../Components/GlowingSuggestionsRight";
import { Hero } from "./Hero";
import { BentoGrid } from "./BentoGrid";

export function HomePage({
  totalQuantity,
  products,
  productsMore,
  productsMoreLast,
}) {
  return (
    <>
      <title>RSNB</title>
      <Header
        totalQuantity={totalQuantity}
        products={products}
        productsMore={productsMore}
        productsMoreLast={productsMoreLast}
      />
      <MarqueePictures />
      <ReusableProductsContainer products={products} />
      <GlowingSuggestions />
      <GlowingSuggestionsRight />
      <ReusableProductsContainer products={productsMore} />
      <ReusableProductsContainer products={productsMoreLast} />
      <Hero />

      {/* <BentoGrid /> */}
    </>
  );
}
