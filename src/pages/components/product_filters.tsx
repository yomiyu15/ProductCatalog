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
        sx={{
          minWidth: 200,
          borderRadius: "8px",
          "& .MuiInputLabel-root": {
            color: "#00adef",
          },
          "& .MuiSelect-root": {
            color: "#333",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "#00adef",
            },
            "&:hover fieldset": {
              borderColor: "#0081c2",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#007ab8",
              boxShadow: "0 0 0 4px rgba(0, 122, 184, 0.2)",
            },
            "& .MuiSelect-select": {
              padding: "8px 14px", // Adjust padding to make the select box shorter
              fontSize: "0.875rem", // Smaller font size for a shorter appearance
            },
          },
        }}
      >
        <InputLabel sx={{fontSize:"0.875rem"}}>Product Category</InputLabel>
        <Select
          value={sortByPrice}
          onChange={handlePriceSortChange}
          label="Product Category"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="price-low-high">Conventional Banking Products</MenuItem>
          <MenuItem value="price-high-low">Interest Free Banking Products</MenuItem>
          <MenuItem value="price-high-low">Digital Banking Products</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset" sx={{ marginLeft: { xs: 0, sm: "2rem" } }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isLatestFilterEnabled}
                onChange={handleFilterChange}
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "#00adef",
                  },
                  "& .MuiCheckbox-root": {
                    padding: "6px", // Adjust padding for a slimmer checkbox
                  },
                }}
              />
            }
            label="A to Z"
            sx={{
              "& .MuiFormControlLabel-label": {
                color: "#00adef",
                fontWeight: 500,
                fontSize: "0.875rem", // Consistent font size with the text field
              },
            }}
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

export default ProductFilters;
