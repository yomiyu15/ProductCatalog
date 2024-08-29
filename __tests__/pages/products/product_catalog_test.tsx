import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCatalog from "@/pages/products/product_catalog";
import { fetchProducts } from "@/utils";

// Mocking fetchProducts function
jest.mock("../../../src/utils", () => ({
  fetchProducts: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 10.99,
        image: "product1.jpg",
      },
    ])
  ),
}));

describe("ProductCatalog Components", () => {
  it("renders loading skeleton while data is being fetched", () => {
    const { getByTestId } = render(<ProductCatalog />);
    const skeletonElement = getByTestId("loading-skeleton");
    expect(skeletonElement).toBeInTheDocument();
  });

  it("renders product cards when data is loaded", async () => {
    render(<ProductCatalog />);
    await waitFor(() => {
      const productCards = screen.getAllByTestId("product-card");
      expect(productCards.length).toBe(1); // Assuming 1 product is returned in the mock data
    });
  });
  it("renders the search field", async () => {
    render(<ProductCatalog />);
    await waitFor(() => {
      const searchTextField = screen.getByTestId("searchbox");
      expect(searchTextField).toBeInTheDocument();
    });
  });

  it("renders pagination component", async () => {
    render(<ProductCatalog />);
    await waitFor(() => {
      const pagination = screen.getByTestId("pagination");
      // Check if pagination component is rendered
      expect(pagination).toBeInTheDocument();
    });
  });
});
