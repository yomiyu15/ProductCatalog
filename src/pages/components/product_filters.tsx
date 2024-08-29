import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface ProductFiltersProps {
  sortByPrice: string;
  handlePriceSortChange: (event: SelectChangeEvent) => void;
  isLatestFilterEnabled: boolean;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductFilters = ({
  sortByPrice,
  isLatestFilterEnabled,
  handlePriceSortChange,
  handleFilterChange,
}: ProductFiltersProps) => {
  return (
    <>
      <FormControl
        variant="outlined"
        style={{ marginBottom: "1rem", minWidth: 320 }}
      >
        <InputLabel>Product Category</InputLabel>
        <Select
          value={sortByPrice}
          onChange={handlePriceSortChange}
          label="Banking Products and Services"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="price-low-high">Conventional Banking Products</MenuItem>
          <MenuItem value="price-high-low"> Interest Free Banking Products</MenuItem>
          <MenuItem value="price-high-low"> Digital Banking Products</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset" sx={{ marginLeft: "1rem" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isLatestFilterEnabled}
                onChange={handleFilterChange}
              />
            }
            label="A to Z"
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

export default ProductFilters;
