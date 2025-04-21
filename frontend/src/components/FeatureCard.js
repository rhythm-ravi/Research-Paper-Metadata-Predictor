import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description }) => {
  return (
    <motion.div
        whileHover={{ scale: 1.1 }}
        // transition={{ type: 'spring', stiffness: 300 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
      <Box sx={{ padding: '20px', background: 'white', borderRadius: '8px' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default FeatureCard;