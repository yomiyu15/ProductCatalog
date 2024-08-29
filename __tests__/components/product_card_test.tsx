// ProductCard.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import ProductCard from "@/pages/components/product_card";
import { ProductCatalogProps } from "@/types";

const mockProduct: ProductCatalogProps = {
  product: {
    id: 1,
    name: "Sample Product",
    description: "Sample Description",
    price: 10.99,
    image: "sample.jpg",
  },
  index: 0,
};

test("renders product card with correct details", () => {
  const { getByText, getByAltText } = render(<ProductCard {...mockProduct} />);

  // Check if product details are rendered
  expect(getByText("Sample Product")).toBeInTheDocument();
  expect(getByText("Sample Description")).toBeInTheDocument();
  expect(getByText("$10.99")).toBeInTheDocument();

  // Check if image is rendered with correct alt text
  const productImage = getByAltText("Sample Product");
  expect(productImage).toBeInTheDocument();
  expect(productImage.getAttribute("src")).toBe("sample.jpg");

  // Check if the "Details" button is rendered
  expect(getByText("Details")).toBeInTheDocument();
});
