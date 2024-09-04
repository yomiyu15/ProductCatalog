import React from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import { useRouter } from "next/router";


interface NoProductFoundProps {
  isBack: boolean;
}

const NoProductFound: React.FC<NoProductFoundProps> = ({ isBack }) => {
  const router = useRouter();

  const goBack = () => {
    console.log("Button clicked");
    router.replace("/"); // Navigate to the home page without adding to history
  };
  
  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h5" style={{ marginTop: "20px", marginBottom: "10px" }}>
          No Product Found
        </Typography>
        <Typography variant="body1" style={{ color: "#555555", marginBottom: "20px" }}>
          We couldn't find any products matching your search criteria.
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
