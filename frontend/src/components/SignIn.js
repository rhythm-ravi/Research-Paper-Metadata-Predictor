import React from 'react';
import { TextField, Button, Box, Typography, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function SignIn({ open, onClose }) {
  // const onClose = () => {
    
  // }
  const handleLogin = () => {
    alert("Logged In!");
    onClose();
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Sign In
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Welcome Back!
          </Typography>
          <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <Button variant="contained" color="primary" size="large" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default SignIn;