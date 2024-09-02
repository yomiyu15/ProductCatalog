"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoScreenPage = () => (
  <Container
    sx={{
      padding: "40px",
      maxWidth: "100%",
      marginTop: "20px",
      marginBottom: "20px",
      backgroundColor: "#fff", // Matches the light blue background
      position: "relative", // Needed for absolute positioning of the image
      overflow: "hidden",
    }}
  >
    <Typography
      variant="body1"
      paragraph
      sx={{
        fontSize: "1rem",
        lineHeight: "1.5",
        color: "#555", // Slightly darker text for better readability
        maxWidth: "100%", // Limiting width for better readability
        marginBottom: "20px",
      }}
    >
      <span style={{ color: "#00adef", fontWeight: "bold" }}>Cooperative Bank of Oromia</span> possesses a diverse range of products within its portfolio. These products are dispersed among different banking organs, which makes it challenging for employees of the bank to find them in one place for clear understanding to serve clients effectively. Therefore, this product catalog is destined to streamline sales efforts while simultaneously serving as an informative resource for employees.

      The objective of this document is to develop an organized product catalog that the bank's employees can use as a reference when they need information about the products and services of the bank.
    </Typography>
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/path/to/your/image.png')", // Replace with the actual path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(80%)", // Slightly darkens the image for better text visibility
        animation: "glow 3s infinite", // Adds the glowing effect
        zIndex: 0,
      }}
    />
    <style>
      {`
        @keyframes glow {
          0% { filter: brightness(80%) blur(0px); }
          50% { filter: brightness(100%) blur(5px); }
          100% { filter: brightness(80%) blur(0px); }
        }
      `}
    </style>
  </Container>
);

export default InfoScreenPage;
