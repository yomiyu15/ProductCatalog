"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Pagination,
  Stack,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import ProductCard from "@/pages/components/product_card";
import { fetchProducts } from "@/utils";
import { ProductProps } from "@/types";
import ProductFilters from "@/pages/components/product_filters";
import ProductCatalogSkeleton from "@/pages/components/product_catalog_skeleton";
import NoProductFound from "@/pages/components/no_product_found";

const ProductCatalog = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortByPrice, setSortByPrice] = useState("");
  const [isLatestFilterEnabled, setIsLatestFilterEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 6;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handlePriceSortChange = (event: SelectChangeEvent) => {
    setSortByPrice(event.target.value as string);
  };

  const handleLatestFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsLatestFilterEnabled(event.target.checked);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Apply sorting by price
  let sortedProducts = [...products];
  if (sortByPrice === "price-low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === "price-high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // Apply filtering
  let filteredProducts = sortedProducts;

  if (isLatestFilterEnabled) {
    filteredProducts = sortedProducts.sort((a, b) => b.id - a.id);
  }

  // Apply search
  if (searchQuery.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  /**
   * Handles changes in pagination.
   * @param {React.ChangeEvent<unknown>} event - The event object.
   * @param {number} value - The new page value.
   */
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (isLoading) return <ProductCatalogSkeleton />;
  if (!currentProducts) {
    return <NoProductFound isBack={true} />;
  }
  return (
    <Container>
      <TextField
        fullWidth
        label="Search By Product Name ..."
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: "1rem" }}
        data-testid="searchbox"
      />

      <ProductFilters
        sortByPrice={sortByPrice}
        handlePriceSortChange={handlePriceSortChange}
        isLatestFilterEnabled={isLatestFilterEnabled}
        handleFilterChange={handleLatestFilterChange}
      />

      {currentProducts.length > 0 ? (
        <Grid container spacing={3}>
          {currentProducts?.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </Grid>
      ) : (
        <Container>
          <NoProductFound isBack={false} />
        </Container>
      )}

      <Stack alignItems="center" mt={5}>
        <Pagination
          count={Math.ceil(filteredProducts.length / productsPerPage)}
          page={currentPage}
          onChange={handleChange}
          data-testid="pagination"
        />
      </Stack>
    </Container>
  );
};

export default ProductCatalog;
