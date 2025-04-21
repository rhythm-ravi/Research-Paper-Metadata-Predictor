import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function SignIn() {
  return (
    <Box sx={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
      <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ mb: 2 }} />
      <Button variant="contained" color="primary" size="large">
        Login
      </Button>
    </Box>
  );
}

export default SignIn;