import React from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { NoProductFound } from "@/types";

const NoProductFound = ({ isBack }: NoProductFound) => {
  const router = useRouter();

  const goBack = () => {
    router.replace("/");
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        {/* <NotFound style={{ fontSize: 100, color: '#ccc' }} /> */}
        <Typography
          variant="h5"
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          No Product Found
        </Typography>
        <Typography
          variant="body1"
          style={{ color: "#555555", marginBottom: "20px" }}
        >
          {"We couldn't find any products matching your search criteria."}
        </Typography>
        {isBack && (
          <Button variant="outlined" onClick={goBack} color="primary">
            Explore More Products
          </Button>
        )}
      </Paper>
    </Container>
  );
};

export default NoProductFound;
