import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Usa RouterLink para redirección interna
import { Box, Typography, Link as MuiLink, Container, Grid } from '@mui/material'; 
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Empresa
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><RouterLink to="/nosotros" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre nosotros</RouterLink></li>
              <li><RouterLink to="/contacto" style={{ color: 'inherit', textDecoration: 'none' }}>Contáctanos</RouterLink></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Servicios
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><MuiLink href="#" color="inherit" underline="hover">Pago en línea</MuiLink></li>
              <li><MuiLink href="#" color="inherit" underline="hover">Financiamiento</MuiLink></li>
              <li><MuiLink href="#" color="inherit" underline="hover">Seguridad</MuiLink></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><RouterLink to="/terminos" style={{ color: 'inherit', textDecoration: 'none' }}>Términos y condiciones</RouterLink></li>
              <li><RouterLink to="/politicas" style={{ color: 'inherit', textDecoration: 'none' }}>Política de privacidad</RouterLink></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <MuiLink href="https://facebook.com" color="inherit" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </MuiLink>
              <MuiLink href="https://twitter.com" color="inherit" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </MuiLink>
              <MuiLink href="https://instagram.com" color="inherit" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} CriptoMate. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
