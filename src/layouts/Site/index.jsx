import React from "react";
import { Container } from "@jsluna/grid";

import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HeroImg from "./HeroImg";
import ProductGrid from "./ProductGrid";

function Site() {
  return (
    <div>
      <Header />
      <HeroImg />
      <Container>
        <Hero />
        <ProductGrid />
      </Container>
      <Footer />
    </div>
  );
}

export default Site;
