import React from "react";
import {
  Container,
  Card,
  Breadcrumbs,
  Link,
  CardContent,
  Typography,
  Box,
  Button,
  Paper,
  Grow,
  CardMedia,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import { ProductProps } from "@/types";

interface SingleProductProps {
  product: ProductProps;
}

const SingleProduct = ({ product }: SingleProductProps) => {
  const router = useRouter();

  const goBack = () => {
    router.replace("/");
  };

  return (
    <Container>
      <Grow in>
        <Paper elevation={3} style={{ padding: "0px" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={goBack}
            sx={{ marginBottom: "20px" }}
          >
            Back
          </Button>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Catalog Products
            </Link>

            <Typography color="text.primary">{product?.name}</Typography>
          </Breadcrumbs>
          <Card style={{ border: "2px solid #ccc", padding: "20px" }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ marginBottom: "8px", fontWeight: "bold" }}
              >
                {product?.name}
              </Typography>
              <Typography
                variant="h6"
                color="#007bff"
                sx={{ marginBottom: "12px" }}
              >
                category: ${product?.category}
              </Typography>
              <Stack alignItems="center">
                <Box
                  sx={{
                    width: "100%",
                    height: 320,
                    background: "#ccc",
                    border: "1px solid #ccc",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product?.image}
                    alt={product?.name}
                    sx={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  />
                </Box>
              </Stack>
              <Typography mt={2} variant="body2" color="#555555">
                {product?.description}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grow>
    </Container>
  );
};

export default SingleProduct;
