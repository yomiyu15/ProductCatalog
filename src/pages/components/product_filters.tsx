import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

interface ProductFiltersProps {
  selectedCategory: string;
  handleCategoryChange: (event: SelectChangeEvent) => void;
  showNewProducts: boolean;
  handleNewProductsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductFilters = ({
  selectedCategory,
  handleCategoryChange,
  showNewProducts,
  handleNewProductsChange,
}: ProductFiltersProps) => {
  return (
    <div>
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

      <FormControlLabel
        control={
          <Checkbox
            checked={showNewProducts}
            onChange={handleNewProductsChange}
            color="primary"
          />
        }
        label="Show New Products"
        sx={{ mt: 2 ,color:"#ee7b28"}}
      />
    </div>
  );
};

export default ProductFilters;
