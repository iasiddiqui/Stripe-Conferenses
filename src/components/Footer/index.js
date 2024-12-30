import React from 'react';
import { Container, Grid, Typography, IconButton, TextField, Button, Box } from '@mui/material';
import { Facebook, LinkedIn, YouTube, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '40px 0' ,marginTop:'5%'}}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <IconButton href="https://facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://linkedin.com" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://youtube.com" color="inherit">
                <YouTube />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" color="inherit">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          {/* Important Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
              Important Links
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a><br />
              <a href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a><br />
              <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a><br />
              <a href="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
            </Typography>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Email: contact@yourdomain.com<br />
              Phone: +123 456 7890<br />
              Address: 123 Your Street, City, Country
            </Typography>
          </Grid>

          {/* Newsletter Signup Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
              Subscribe to Our Newsletter
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                sx={{ mb: 2, backgroundColor: '#fff', borderRadius: '4px' }}
                fullWidth
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '20px' }}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
