import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
 
const FeatureCard = ({ name, link, navigate, onClick, title, description, icon }) => {
  return (
    <Box onClick={() => onClick(name, link, navigate)} style={{ textDecoration: 'none', display: 'block'}} sx={{ p: 2, cursor: 'pointer'}}>
    <motion.div
      whileHover={{ scale: 1.05 }}
    //   transition={{ type: 'spring', stiffness: 300 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        height: '250px',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Box sx={{ fontSize: '3rem', marginBottom: '10px' }}>{icon}</Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography>
        {description}
      </Typography>
    </motion.div>
    </Box>
  );
};

export default FeatureCard;