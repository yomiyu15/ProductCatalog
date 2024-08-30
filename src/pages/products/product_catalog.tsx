"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Pagination,
  Stack,
  TextField,
  SelectChangeEvent,
  InputAdornment,
} from "@mui/material";
import ProductCard from "@/pages/components/product_card";
import { fetchProducts } from "@/utils";
import { ProductProps } from "@/types";
import ProductFilters from "@/pages/components/product_filters";
import ProductCatalogSkeleton from "@/pages/components/product_catalog_skeleton";
import NoProductFound from "@/pages/components/no_product_found";
import SearchIcon from '@mui/icons-material/Search'; // Import the SearchIcon component from MUI

const ProductCatalog = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortByPrice, setSortByPrice] = useState("");
  const [isLatestFilterEnabled, setIsLatestFilterEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 9;

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

  const handleLatestFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLatestFilterEnabled(event.target.checked);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  let sortedProducts = [...products];
  if (sortByPrice === "price-low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === "price-high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  let filteredProducts = sortedProducts;

  if (isLatestFilterEnabled) {
    filteredProducts = sortedProducts.sort((a, b) => b.id - a.id);
  }

  if (searchQuery.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (isLoading) return <ProductCatalogSkeleton />;
  if (!currentProducts.length) {
    return <NoProductFound isBack={true} />;
  }

  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row" }} // Stack horizontally on larger screens
        spacing={10}
        alignItems="center"
        style={{ marginBottom: "1rem" }}
      >
        {/* Search Box */}
        <TextField
          label="Search By Product Name ..."
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            width: { xs: "100%", sm: "75%", md: "60%" }, // Adjust width based on screen size
            borderRadius: "40px", // Slightly more rounded corners for a smoother look
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px", // Ensure border radius is applied to input
              "& fieldset": {
                borderColor: "#00adef", // Custom border color
                borderWidth: 1, // Thicker border for a more defined look
              },
              "&:hover fieldset": {
                borderColor: "#0081c2", // Slightly darker border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#007ab8", // Darker border color when focused
              
              },
              "& input": {
                padding: "8px 14px", // Adjust padding to make the text field shorter
                fontSize: "0.875rem", // Smaller font size for a shorter appearance
              },
            },
            "& .MuiInputLabel-root": {
              color: "#00adef", // Custom label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#007ab8", // Darker label color when focused
            },
            "& .MuiOutlinedInput-input": {
              color: "#333", // Input text color
            },
            "& .MuiFormLabel-root": {
              fontWeight: 400, // Bold font weight for the label
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#00adef" }} /> {/* Custom icon color */}
              </InputAdornment>
            ),
          }}
          data-testid="searchbox"
        />

        <ProductFilters
          sortByPrice={sortByPrice}
          handlePriceSortChange={handlePriceSortChange}
          isLatestFilterEnabled={isLatestFilterEnabled}
          handleFilterChange={handleLatestFilterChange}
        />
      </Stack>

      {currentProducts.length > 0 ? (
        <Grid container spacing={5}>
          {currentProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </Grid>
      ) : (
        <Container>
          <NoProductFound isBack={false} />
        </Container>
      )}

      <Stack alignItems="center" mt={10}>
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
