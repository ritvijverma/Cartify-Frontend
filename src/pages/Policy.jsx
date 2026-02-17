import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { FcPrivacy } from "react-icons/fc";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={4}>
        <FcPrivacy size={50} />
        <Typography variant="h4" component="h1" fontWeight="bold" mt={2}>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mt={1}>
          How we handle your personal information
        </Typography>
      </Box>

      {/* Privacy Policy Content */}
      <Paper sx={{ p: 4, backgroundColor: "#f9f9f9" }}>
        <Typography variant="body1" paragraph>
          Cartifya is committed to protecting your privacy and ensuring a safe experience while using our platform.
        </Typography>

        <Typography variant="h6" mt={2}>Information We Collect</Typography>
        <Typography variant="body1" paragraph>
          We may collect information like your name, email, and account details when you register, login, or use our services.
        </Typography>

        <Typography variant="h6" mt={2}>How We Use Your Information</Typography>
        <ul>
          <li>To provide a personalized shopping experience</li>
          <li>To manage user accounts and orders</li>
          <li>To communicate updates, promotions, or important notices</li>
        </ul>

        <Typography variant="h6" mt={2}>Data Security</Typography>
        <Typography variant="body1" paragraph>
          We take reasonable steps to protect your data from unauthorized access or disclosure. However, no online system is completely secure.
        </Typography>

        <Typography variant="h6" mt={2}>Your Choices</Typography>
        <Typography variant="body1" paragraph>
          You can update your account information anytime and manage your communication preferences. We do not sell your personal information.
        </Typography>

        <Typography variant="body1" paragraph>
          By using Cartifya, you agree to this privacy policy. We may update this policy occasionally, so please check back periodically.
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
