// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import { GlowingSuggestions } from "../../Components/GlowingSuggestions";
import { Header } from "../../Components/Header";
import { MarqueePictures } from "./MarqueePictures";
import { ReusableProductsContainer } from "../../Components/ReusableProductsContainer";
import { GlowingSuggestionsRight } from "../../Components/GlowingSuggestionsRight";
import { NewArrivals } from "./NewArrivals";
import { Hero } from "./Hero";
import { BentoGrid } from "./BentoGrid";
import { Footer } from "../../Components/Footer";

export function HomePage({
  totalQuantity,
  products,
  productsMore,
  productsMoreLast,
  newArrivals,
}) {
  return (
    <>
      <title>RSNB - Home</title>
      <Header
        totalQuantity={totalQuantity}
        products={products}
        productsMore={productsMore}
        productsMoreLast={productsMoreLast}
      />
      <MarqueePictures />
      <ReusableProductsContainer title="TRENDING NOW" products={products} />
      <GlowingSuggestions />
      <GlowingSuggestionsRight />
      <ReusableProductsContainer
        title="LIMITED EDITIONS"
        products={productsMore}
      />
      <ReusableProductsContainer
        title="ESSENTIALS OF THE SEASON"
        products={productsMoreLast}
      />
      <NewArrivals title="NEW ARRIVALS" newArrivals={newArrivals} />
      <Hero />
      {/* <BentoGrid /> */}
      <Footer />
    </>
  );
}
