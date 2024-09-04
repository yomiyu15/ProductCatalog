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
  Box,
  Fade
} from "@mui/material";
import Link from "next/link";
import { ProductCatalogProps } from "@/types";

const ProductCard = ({ product, index }: ProductCatalogProps) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      data-testid="product-card"
    >
      <Grow in={true} timeout={index * 300}>
        <Card
          sx={{
            borderRadius: "12px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            position: "relative",
            transform: "scale(1)",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          {product?.isNew && (
            <Fade in={product.isNew} timeout={2000}>
              <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "#00adef",
                color: "white",
                padding: "4px 8px",
                borderRadius: "0px 0px 12px 0px",
                zIndex: 10,
                fontSize: "0.75rem", // Adjust font size if needed
                animation: "bounce 2s infinite", // Apply the new bouncing animation
              }}
            >
              New Product
            </Box>
            </Fade>
          )}
          <CardActionArea
            href={`/products/${product?.id}`}
            LinkComponent={Link}
          >
            <CardMedia
              component="img"
              height="100"
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
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                color="#00adef"
                fontWeight={600}
              >
                {product?.name}
              </Typography>
              <Typography variant="body2" color="text.primary">
              <span style={{ color: "#333", fontWeight: "bold" }}> {product?.category}</span>  
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {product?.description}
              </Typography>
             
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ padding: "8px 16px", display: "flex", justifyContent: "center" }}>
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
