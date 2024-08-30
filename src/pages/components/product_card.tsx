"use client";

import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  Button,
  CardActionArea,
  CardContent,
  Typography,
  Grow,
} from "@mui/material";
import { ProductCatalogProps, ProductProps } from "@/types";
import Link from "next/link";

const ProductCard = ({ product, index }: ProductCatalogProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} data-testid="product-card">
      <Grow in={true} timeout={index * 500}>
        <Card sx={{ minHeight: "100%" }}>
          <CardActionArea
            href={`/products/${product?.id}`}
            LinkComponent={Link}
          >
           <CardMedia
  component="img"
  height="140"
  image={product?.image}
  alt={product?.name}
  sx={{
    transition: "transform 0.3s, boxShadow 0.3s", // Smooth transition for transform and boxShadow
    "&:hover": {
      transform: "scale(1.05)", // Add small zoom in effect on hover
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add a subtle shadow on hover
    },
  }}
/>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product?.description}
              </Typography>
              <Typography variant="h6" color="#00adef">
                {product?.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
            style={{color:"#00adef" }}
              href={`/products/${product?.id}`}
              LinkComponent={Link}
              size="small"
            >
              view more
            </Button>
            {}
          </CardActions>
         

        </Card>
      </Grow>
    </Grid>
  );
};

export default ProductCard;
