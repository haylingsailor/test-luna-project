import React from "react";
import { TextButton } from "@jsluna/button";
import { Card } from "@jsluna/card";
import { GridItem, GridWrapper } from "@jsluna/grid";
import { Section } from "@jsluna/section";

import "./ProductGrid.scss";

export default () => (
  <Section>
    <GridWrapper matrix>
      {Array(9)
        .fill("")
        .map((_, index) => {
          return (
            <GridItem
              className="ln-u-text-align-center"
              size={{ md: "1/3", xs: "1/2" }}
              // Note that using the `index` as the React `key` is an anti-pattern.
              // A unique id for each item should be used instead
              key={index}
            >
              <Card
                className="ln-u-display-flex ln-u-justify-content-center ln-u-flex-direction-col"
                hard
              >
                <img
                  className="product-grid__img"
                  src="https://stoic-lewin-82d323.netlify.com/static/media/product-grid-tile.4c8c06be.jpg"
                  alt="Ready made sandwiches"
                />
                <Card className="ln-u-display-flex ln-u-justify-content-center ln-u-flex-direction-col">
                  <h4>Sandwiches</h4>
                  <TextButton>Browse products</TextButton>
                </Card>
              </Card>
            </GridItem>
          );
        })}
    </GridWrapper>
  </Section>
);
