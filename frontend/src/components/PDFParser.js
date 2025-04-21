import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function PDFParser() {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);  // backend parsing here
        alert("File Submitted");
    }

    return (
        <Box sx={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
                PDF Parser
            </Typography>
            <Button variant="contained" component="label" sx={{ mb: 2 }}>
                Upload PDF
                <input type="file" hidden accept="application/pdf" onChange={handleFileUpload} />
            </Button>
        </Box>
    );
}

export default PDFParser;