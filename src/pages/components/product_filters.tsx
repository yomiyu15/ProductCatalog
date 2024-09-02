import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface ProductFiltersProps {
  selectedCategory: string;
  handleCategoryChange: (event: SelectChangeEvent) => void;
}

const ProductFilters = ({
  selectedCategory,
  handleCategoryChange,
}: ProductFiltersProps) => {
  return (
    <FormControl
      variant="outlined"
      sx={{
        minWidth: 350,  // Adjusted width for a slimmer box
        borderRadius: "3px",
        '& .MuiOutlinedInput-root': {
          borderRadius: '7px',
        },
        '& .MuiInputLabel-root': {
          fontSize: '0.875rem',
        }
      }}
    >
      <InputLabel>Category</InputLabel>
      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        label="Category"
      >
        <MenuItem value="">All Categories</MenuItem>
        <MenuItem value="Conventional Banking Products">Conventional Banking Products</MenuItem>
        <MenuItem value="Interest Free Banking Products">Interest Free Banking Products</MenuItem>
        <MenuItem value="Digital Banking Products">Digital Banking Products</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ProductFilters;
