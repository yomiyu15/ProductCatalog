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
import { ProductCatalogProps } from "@/types";
import Link from "next/link";

const ProductCard = ({ product, index }: ProductCatalogProps) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4} // Reduced width for medium screens
      lg={3} // Reduced width for large screens
      data-testid="product-card"
    >
      <Grow in={true} timeout={index * 300}>
        <Card
          sx={{
            borderRadius: "12px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            transform: "scale(1)",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <CardActionArea
            href={`/products/${product?.id}`}
            LinkComponent={Link}
          >
            <CardMedia
              component="img"
              height="180" // Adjusted height to fit the reduced width
              image={product?.image}
              alt={product?.name}
              sx={{
                transition: "transform 0.3s, filter 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  filter: "brightness(1.1)",
                },
              }}
            />

            <CardContent sx={{ padding: "16px" }}>
              <Typography gutterBottom variant="body1" component="div" color="#00adef" fontWeight={600}>
                {product?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {product?.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product?.category}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ padding: "8px 16px" }}>
            <Button
              style={{ color: "#007BB5", fontWeight: 600 }}
              href={`/products/${product?.id}`}
              LinkComponent={Link}
              size="small"
            >
              View More
            </Button>
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
};

export default ProductCard;
