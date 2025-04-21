import React, { useState } from 'react';    //React lib and useState hookk imported
import axios from 'axios';    // library for making http requesets to server

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Dialog } from '@mui/material';
import { motion } from 'framer-motion';

import './App.css';

import FeatureCard from './components/FeatureCard.js';
import LandingSection from './components/LandingPage.js';
// Import other pages/components
import SignIn from './components/SignIn.js';
import MetadataForm from './components/MetadataForm.js';
import PDFParser from './components/PDFParser.js';

import BackgroundAnimation from './components/BackgroundAnimation.js';
import { scroller } from 'react-scroll';    // To scroll to destination element in DOM
import { useNavigate } from 'react-router-dom';
// import TestBackground from './components/TestBackground.js';
<title>Research Paper Metadata Predictor</title>



function App() {

    // Scroll animation function
    const handleScrollAndNavigate = (targetId, navigateTo, navigate) => {
        scroller.scrollTo(targetId, {
            duration: 1000,
            delay: 0,
            smooth: true,
        });
        console.log("Scrolled");
        if (navigateTo)
            navigate(navigateTo);
    };
    const navigate = useNavigate();

    const [openSignIn, setOpenSignIn] = useState(false);
    // Open Sign-In modal
    const handleOpenSignIn = () => {
        setOpenSignIn(true);
    };
    // Close Sign-In modal
    const handleCloseSignIn = () => {
        setOpenSignIn(false);
    };

    return (
            <div className="App" style={{ filter: (openSignIn ? 'blur(5px)' : '')}}>
                {/* Background Animation */}
                {/* <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',}}>
                    <BackgroundAnimation />
                </Box> */}
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                    <BackgroundAnimation />
                </Box>
                {/** Nav Bar */}
                <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            Research Paper Metadata Predictor
                        </Typography>
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                        <Button color="inherit" onClick={handleOpenSignIn}>
                            Sign In
                        </Button>
                        <Button color="inherit" onClick={() => handleScrollAndNavigate('main-section', '/metadata-form', navigate)}>
                            Metadata Form
                        </Button>
                        <Button color="inherit" onClick={() => handleScrollAndNavigate('main-section', '/pdf-parser', navigate)}>
                            PDF Parser
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* Landing section */}
                <LandingSection />
                {/* Routes */}
                <Container name="main-section">
                    <Routes>
                        {/* <Route path="/signin" element={<SignIn />} /> */}
                        <Route path="/metadata-form" element={<MetadataForm />} />
                        <Route path="/pdf-parser" element={<PDFParser />} />
                    </Routes>
                </Container>
                {/* Features Section */}
                <Box name="features-section" className="features-section" sx={{ background: '#f5f5f5', padding: '50px 20px' }}>
                    <Typography variant="h4" textAlign="center" gutterBottom>
                        Key Features
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">    {/* 4*8=32px ie 16 on each side */}
                        <Grid size={{ xs:12, sm: 6, md: 4 }}>       {/**Based on a 12 column grid system */}
                            <FeatureCard
                                name="main-section"
                                link="/metadata-form"
                                navigate={navigate}
                                onClick={handleScrollAndNavigate}
                                title="Predict Metadata"
                                description="Automatically predict missing metadata fields for research papers."
                                icon="📊"
                            />
                        </Grid>

                        <Grid size={{ xs:12, sm: 6, md: 4 }}>
                            <FeatureCard
                                name="main-section"
                                link="/metadata-form"
                                navigate={navigate}
                                onClick={handleScrollAndNavigate}
                                title="Extract Fields from JSON"
                                description="Upload a JSON file, and we’ll extract and auto-fill the metadata fields."
                                icon="📁"
                            />
                        </Grid>

                        <Grid size={{ xs:12, sm: 6, md: 4 }}>
                            <FeatureCard
                                name="main-section"
                                link="/pdf-parser"
                                navigate={navigate}
                                onClick={handleScrollAndNavigate}
                                title="Generate Abstracts"
                                description="Upload a PDF, and we’ll generate an abstract automatically."
                                icon="📄"
                            />
                        </Grid>
                    </Grid>
                </Box>
                

                {/* Footer */}
                <Box sx={{ background: '#1976d2', color: 'white', padding: '20px', mt: 'auto' }}>
                    <Typography textAlign="center">
                        © 2025 Research Paper Metadata Predictor. All Rights Reserved.
                    </Typography>
                </Box>

                <SignIn open={openSignIn} onClose={handleCloseSignIn} />        
                {/* Above we use Lifting State up */}
                {/* We could pass in setOpenSignIn as well (and then define onCLose within SignIn */}
            </div>
    );
}

export default App;
