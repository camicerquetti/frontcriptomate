import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    // Validar el campo de correo electrónico
    if (!email.trim()) {
      setError('El correo electrónico es obligatorio.');
      return;
    }

    // Expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    try {
      const response = await fetch('https://criptomate-jbch.onrender.com/recover-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Se ha enviado un correo con las instrucciones para recuperar tu contraseña.');
        setTimeout(() => navigate('/login'), 3000); // Redirige después de 3 segundos
      } else {
        setError(data.error || 'Error al enviar el correo');
      }
    } catch (error) {
      setError('Ocurrió un error');
      console.error('Request failed:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}> {/* Ajusta el margen superior aquí */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Recuperar Contraseña
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Correo Electrónico"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error} // Muestra el error en el campo
            helperText={error} // Muestra el mensaje de error
          />
          {message && <Typography color="success">{message}</Typography>}
          <Button class="but"
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RecoverPassword;
