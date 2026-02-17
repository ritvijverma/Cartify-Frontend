import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';

const PageNotFound = () => {
  return (
    <Layout>
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: '#f5f5f5',
        p: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#1976d2' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography sx={{ mb: 4, color: 'gray' }}>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button
        component={NavLink}
        to="/"
        variant="contained"
        color="primary"
      >
        Go to Home
      </Button>
    </Box>
    </Layout>
  );
};

export default PageNotFound;
