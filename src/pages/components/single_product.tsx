import React from "react";
import {
  Container,
  Grid,
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
  Divider,
} from "@mui/material";
import { useRouter } from "next/router";
import { ProductProps } from "@/types";
import Footer from "./footer";

interface SingleProductProps {
  product: ProductProps;
}

const SingleProduct = ({ product }: SingleProductProps) => {
  const router = useRouter();

  const goBack = () => {
    router.replace("/");
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grow in>
          <Paper elevation={3} sx={{ padding: 6, borderRadius: 3 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={goBack}
              sx={{
                marginBottom: 3,
                borderColor: "#ee7b28",
                color: "#ee7b28",
                "&:hover": {
                  borderColor: "#ee7b28",
                  color: "#fff",
                  backgroundColor: "#ee7b28",
                },
              }}
            >
              Back
            </Button>
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 3 }}>
              <Link underline="hover" color="#00adef" href="/">
                Product Catalogs
              </Link>
              <Typography
  color="#00adef"
  sx={{ textTransform: "lowercase" }}
>
  {product?.name}
</Typography>

            </Breadcrumbs>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: 2 }}>
                  <Card
                    sx={{
                      border: 1,
                      borderColor: "#ccc",
                      padding: 4,
                      borderRadius: 2,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          marginBottom: 2,
                          fontWeight: "bold",
                          color: "#333",
                        }}
                      >
                        {product?.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ marginBottom: 3, color: "#00adef" }}
                      >
                        Category: {product?.category}
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          height: 350,
                          background: "#f0f0f0",
                          border: 1,
                          borderColor: "#ccc",
                          borderRadius: 2,
                          marginBottom: 3,
                          overflow: "hidden",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={`/${product?.image}`}
                          alt={product?.name}
                          sx={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                      <Typography mt={2} variant="body2" color="text.secondary">
                        {product?.description}
                      </Typography>
                      <Typography
                        mt={2}
                        variant="h6"
                        sx={{ color: "#ee7b28", fontWeight: "bold" }}
                      >
                        PRODUCT OVERVIEW:
                      </Typography>
                      <Typography mt={1} variant="body2" color="text.secondary">
                    {product?.productoverview}
                  </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: 2 }}>
                  {/* Key Features */}
                  <Divider sx={{ margin: "2px 0", borderColor: "#ee7b28" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#00adef" }}
                  >
                    Key Features
                  </Typography>
                  <Typography mt={1} variant="body2" color="text.secondary">
                    <ul>
                      {product?.keyfeatures?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#00adef" }}
                  >
                    Benefits
                  </Typography>
                    <Typography mt={1} variant="body2" color="text.secondary">
                    <ul>
                      {product?.benefit?.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </Typography>

                  {/* Eligible Candidates */}
                  <Divider sx={{ margin: "20px 0", borderColor: "#ee7b28" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#00adef" }}
                  >
                    Eligible Candidates
                  </Typography>
                  <Typography mt={1} variant="body2" color="text.secondary">
                    <ul>
                      {product?.eligibleCandidates?.map((ec, index) => (
                        <li key={index}>{ec}</li>
                      ))}
                    </ul>
                  </Typography>

                  {/* Benefits */}
                  {/* <Divider sx={{ margin: "20px 0", borderColor: "#ee7b28" }} /> */}
                  
                

                  {/* Target Customers */}

                  <Divider sx={{ margin: "20px 0", borderColor: "#ee7b28" }} />
                
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#00adef" }}
                  >
                    Target Customers
                  </Typography>
                  <Typography mt={1} variant="body2" color="text.secondary">
                    <ul>
                      {product?.target?.map((target, index) => (
                        <li key={index}>{target}</li>
                      ))}
                    </ul>
                  </Typography>

                  {/* Cross-Selling Products */}
                  <Divider sx={{ margin: "20px 0", borderColor: "#ee7b28" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#00adef" }}
                  >
                    Cross-Selling Products
                  </Typography>
                  <Typography mt={1} variant="body2" color="text.secondary">
                    <ul>
                      {product?.crossSellingProducts?.map((product, index) => (
                        <li key={index}>{product}</li>
                      ))}
                    </ul>
                  </Typography>

                  {/* Remarks */}
                  <Divider sx={{ margin: "20px 0", borderColor: "#ee7b28" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#00adef" }}
                  >
                    Remarks
                  </Typography>
                  <Typography mt={1} variant="body2" color="text.secondary">
                    {product?.remarks}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grow>
      </Container>
      <Footer />
    </>
  );
};

export default SingleProduct;
