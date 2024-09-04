import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Pagination,
  Stack,
  TextField,
  InputAdornment,
  SelectChangeEvent,
} from "@mui/material";
import ProductCard from "@/pages/components/product_card";
import { fetchProducts } from "@/utils";
import { ProductProps } from "@/types";
import ProductFilters from "@/pages/components/product_filters";
import ProductCatalogSkeleton from "@/pages/components/product_catalog_skeleton";
import NoProductFound from "@/pages/components/no_product_found";
import SearchIcon from "@mui/icons-material/Search";

const ProductCatalog = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showNewProducts, setShowNewProducts] = useState<boolean>(false);

  const productsPerPage = 8;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const handleNewProductsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowNewProducts(event.target.checked);
  };

  // Filtered Products based on category, search query, and new product status
  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : false;

    const category = product.category ? String(product.category).toLowerCase() : "";
    const matchesCategory = selectedCategory
      ? category === selectedCategory.toLowerCase()
      : true;

    const matchesNewProducts = showNewProducts
      ? product.isNew
      : true;

    return matchesSearchQuery && matchesCategory && matchesNewProducts;
  });

  // Sort filtered products so that new products appear first
  const sortedProducts = filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (isLoading) return <ProductCatalogSkeleton />;

  if (!filteredProducts.length) {
    return (
      <Container>
        <NoProductFound isBack={true} />
      </Container>
    );
  }

  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "column" }}
        spacing={4}
        alignItems="center"
        style={{ marginBottom: "5rem" }}
      >
        <TextField
          label="Search By Product Name ..."
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            width: { xs: "100%", sm: "75%", md: "70%" },
            borderRadius: "3px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "5px",
              "& fieldset": {
                borderColor: "#000",
                borderWidth: 1,
              },
              "&:hover fieldset": {
                borderColor: "#0081c2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#007ab8",
              },
              "& input": {
                padding: "8px 14px",
                fontSize: "0.875rem",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#00adef",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#007ab8",
            },
            "& .MuiOutlinedInput-input": {
              color: "#333",
            },
            "& .MuiFormLabel-root": {
              fontWeight: 400,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#00adef" }} />
              </InputAdornment>
            ),
          }}
          data-testid="searchbox"
        />

        <ProductFilters
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          showNewProducts={showNewProducts}
          handleNewProductsChange={handleNewProductsChange}
        />
      </Stack>

      <Grid container spacing={5}>
        {currentProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </Grid>

      <Stack alignItems="center" mt={1}>
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
