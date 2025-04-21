import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button } from '@mui/material';
// import './LandingSection.css'; // Add custom styles here

const LandingSection = () => {
  return (
    <Box className="landing-section">
      {/* Section 1 */}
      <Box sx={{ my: 6 }}>
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to the Metadata Predictor
        </Typography>
        <Typography variant="h6" gutterBottom>
          Predict missing metadata, extract fields from JSON or PDFs, and generate abstracts for research papers.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
          href="#features"
        >
          Learn More
        </Button>
      </motion.div>
      </Box>

      {/* Section 2 */}
      <Box sx={{ my: 6 }}>
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" gutterBottom>
          Utility
        </Typography>
        <Typography>
          Our platform leverages cutting-edge technology to simplify research workflows, enabling you to focus on what matters most.
        </Typography>
      </motion.div>
      </Box>

      {/* Section 3 */}
      <Box sx={{ my: 6 }}>
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" gutterBottom>
          Seamless Integration
        </Typography>
        <Typography>
          Integrate JSON, PDFs, and other formats effortlessly into your research process.
        </Typography>
      </motion.div>
      </Box>
    </Box>
  );
};

export default LandingSection;