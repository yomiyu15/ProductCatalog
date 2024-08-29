import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
        width: '100%',
      }}
    >
      <Grid container spacing={4} justifyContent="space-between" sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We offer a wide range of products to meet your needs.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: contact@yourstore.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: +123 456 7890
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" sx={{ color: '#000' }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: '#000' }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: '#000' }}>
              <Instagram />
            </IconButton>
            <IconButton href="#" sx={{ color: '#000' }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box mt={3} textAlign="center" sx={{ pt: 2, borderTop: '1px solid #ccc' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Your Store. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
