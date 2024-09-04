import React from "react";
import { fetchProducts } from "@/utils";

describe("fetchProducts Function", () => {
  it("fetches products successfully", async () => {
    // Mocking the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, name: "Product 1" }]),
      })
    );

    const data = await fetchProducts();
    expect(data.length).toBeGreaterThan(0);
  });

  it("handles errors", async () => {
    // Mocking the fetch function to return an error
    global.fetch = jest.fn(() => Promise.reject(new Error("Failed to fetch")));

    const data = await fetchProducts();

    expect(data).toEqual([]);
  });
});
