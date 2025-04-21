import React, { useState } from 'react';    //React lib and useState hookk imported
import axios from 'axios';    // library for making http requesets to server

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

import './App.css';

import FeatureCard from './components/FeatureCard.js';
import LandingSection from './components/LandingPage.js';
// Import other pages/components
import SignIn from './components/SignIn.js';
import MetadataForm from './components/MetadataForm.js';
import PDFParser from './components/PDFParser.js';
<title>Research Paper Metadata Predictor</title>



function App() {
    return (
        <Router>
            <div className="App">
                {/** Nav Bar */}
                <AppBar position="static" sx={{backgroundColor: '#1976d2'}}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            Research Paper Metadata Predictor
                        </Typography>
                        <Button color="inherit" component={Link} to="/signin">
                            Sign In
                        </Button>
                        <Button color="inherit" component={Link} to="/metadata-form">
                            Metadata Form
                        </Button>
                        <Button color="inherit" component={Link} to="/pdf-parser">
                            PDF Parser
                        </Button>

                    </Toolbar>
                </AppBar>

                {/* Landing section */}
                <LandingSection />

                {/* Features Section */}
                <Box className="features-section" sx={{ background: '#f5f5f5', padding: '50px 20px' }}>
                    <Typography variant="h4" textAlign="center" gutterBottom>
                        Key Features
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">    {/* 4*8=32px ie 16 on each side */}
                        <Grid item xs={12} sm={6} md={4} sx={{ border: '1px solid red' }}>       {/**Based on a 12 column grid system */}
                            {/* <Box sx={{ p: 2 }}> */}
                            <FeatureCard
                                title="Predict Metadata"
                                description="Automatically predict missing metadata fields for research papers."
                                icon="📊"
                            />
                            {/* </Box> */}
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ border: '1px solid red' }}>
                            {/* <Box sx={{ p: 2 }}> */}
                            <FeatureCard
                                title="Extract Fields from JSON"
                                description="Upload a JSON file, and we’ll extract and auto-fill the metadata fields."
                                icon="📁"
                            />
                            {/* </Box> */}
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ border: '1px solid red' }}>
                            {/* <Box sx={{ p: 2 }}> */}
                            <FeatureCard
                                title="Generate Abstracts"
                                description="Upload a PDF, and we’ll generate an abstract automatically."
                                icon="📄"
                            />
                            {/* </Box> */}
                        </Grid>
                    </Grid>
                </Box>
                {/* Routes */}
                <Container>
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/metadata-form" element={<MetadataForm />} />
                        <Route path="/pdf-parser" element={<PDFParser />} />
                    </Routes>
                </Container>

                {/* Footer */}
                <Box sx={{ background: '#1976d2', color: 'white', padding: '20px', mt: 'auto' }}>
                    <Typography textAlign="center">
                        © 2025 Research Paper Metadata Predictor. All Rights Reserved.
                    </Typography>
                </Box>
            </div>

        </Router>
    );
}

export default App;
