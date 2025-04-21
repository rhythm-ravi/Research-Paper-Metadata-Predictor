import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function MetadataForm() {
  return (
    <Box sx={{ maxWidth: 600, margin: '50px auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Metadata Form
      </Typography>
      <TextField label="Title" variant="outlined" fullWidth sx={{ mb: 2 }} />
      <TextField label="Author(s)" variant="outlined" fullWidth sx={{ mb: 2 }} />
      <TextField label="Abstract" multiline rows={4} variant="outlined" fullWidth sx={{ mb: 2 }} />
      <Button variant="contained" color="primary" size="large">
        Predict Metadata
      </Button>
    </Box>
  );
}

export default MetadataForm;