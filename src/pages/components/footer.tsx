import React from "react";
import {
  Typography,
  Link,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ArrowUpward,
} from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Grid
      container
      spacing={isSmallScreen ? 3 : 6}
      justifyContent="space-between"
      sx={{
        py: 10,
        px: 4,
        mt: 'auto',
        width: '100%',
        color: theme.palette.mode === 'light' ? '#333' : '#fff',
        background: "linear-gradient(to bottom, #fff, #00adef)", // Gradient background
        boxShadow: theme.shadows[2],
        mx: '0', // Remove any horizontal margin
      }}
      component="footer"
    >
      {/* About Us Section */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          About Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We offer a wide range of products to meet your needs. Our commitment to quality and customer satisfaction sets us apart.
        </Typography>
      </Grid>

      {/* Contact Section */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          Contact
        </Typography>
        <div>
          <Typography variant="body1" color="text.secondary">
            📧 <Link href="mailto:contact@yourstore.com" color="inherit" underline="hover">contact@yourstore.com</Link>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            📞 <Link href="tel:+1234567890" color="inherit" underline="hover">+123 456 7890</Link>
          </Typography>
        </div>
      </Grid>

      {/* Follow Us Section */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          Follow Us
        </Typography>
        <div>
          <IconButton
            href="#"
            aria-label="Facebook"
            sx={{
              color: theme.palette.mode === 'light' ? '#4267B2' : '#333',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="#"
            aria-label="Twitter"
            sx={{
              color: theme.palette.mode === 'light' ? '#1DA1F2' : '#333',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            href="#"
            aria-label="Instagram"
            sx={{
              color: theme.palette.mode === 'light' ? '#C13584' : '#333',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            href="#"
            aria-label="LinkedIn"
            sx={{
              color: theme.palette.mode === 'light' ? '#0A66C2' : '#333',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            <LinkedIn />
          </IconButton>
        </div>
      </Grid>

      {/* Newsletter Signup */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          Newsletter
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Subscribe to our newsletter to receive the latest updates and offers.
        </Typography>
        <div style={{ display: 'flex', gap: 8 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Your email"
            sx={{ flex: 1, backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
          />
          <Button variant="contained" color="primary" sx={{ px: 3 }}>
            Subscribe
          </Button>
        </div>
      </Grid>

      {/* Back to Top Button */}
      {!isSmallScreen && (
        <div
          style={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            background: "linear-gradient(to bottom, #00ADEE, #fff)", // Gradient background
            color: '#fff',
            borderRadius: '50%',
            padding: 8,
            boxShadow: theme.shadows[3],
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s',
         
          }}
          onClick={handleBackToTop}
        >
          <ArrowUpward />
        </div>
      )}

      {/* Footer Bottom */}
      <Grid item xs={12} sx={{ textAlign: 'center', pt: 3, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Your Store. All rights reserved.
        </Typography>
        <div style={{ marginTop: 8 }}>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          |
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
