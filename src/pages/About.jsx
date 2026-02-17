// import React from "react";
// import { Box, Typography, Container, Grid, Avatar, Paper } from "@mui/material";
// import { FcAbout } from "react-icons/fc";
// import Layout from "../components/Layouts/Layout";

// const About = () => {
//   return (
//  <Layout>
//      <Container sx={{ mt: 5, mb: 5 }}>
//       {/* Page Header */}
//       <Box textAlign="center" mb={4}>
//         <FcAbout size={50} />
//         <Typography variant="h4" component="h1" fontWeight="bold" mt={2}>
//           About Cartifya
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary" mt={1}>
//           Your one-stop solution for online shopping
//         </Typography>
//       </Box>

//       {/* Description */}
//       <Paper sx={{ p: 4, mb: 5, backgroundColor: "#f9f9f9" }}>
//         <Typography variant="body1" paragraph>
//           Cartifya is an e-commerce web application built to provide a seamless online shopping experience. 
//           I designed and developed this project from scratch, implementing features like:
//         </Typography>
//         <ul>
//           <li>Responsive UI using React and Material-UI</li>
//           <li>User authentication (Login/Register)</li>
//           <li>Shopping Cart functionality</li>
//           <li>Product Categories and Navigation</li>
//           <li>Interactive and modern UI/UX</li>
//         </ul>
//         <Typography variant="body1" paragraph>
//           The goal was to create a fully functional, clean, and user-friendly online store interface, while focusing on code modularity and maintainability.
//         </Typography>
//       </Paper>

//       {/* Developer Section */}
//       <Box textAlign="center">
//         <Typography variant="h5" mb={3}>
//           Meet the Developer
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item>
//             <Avatar
//               alt="Ritvij Verma"
//               src="/path-to-your-photo.jpg"
//               sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
//             />
//             <Typography variant="h6">Ritvij Verma</Typography>
//             <Typography variant="body2" color="text.secondary">
//               Full-Stack Developer | React & Material-UI Enthusiast
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//  </Layout>
//   );
// };

// export default About;

import React from "react";
import { Layout, Row, Col, Typography, Card, Avatar, Divider } from "antd";
import { GithubOutlined, InfoCircleOutlined, InstagramOutlined, LinkedinOutlined, UserOutlined } from "@ant-design/icons";
import AppLayout from "../components/Layouts/Layout";
import { Space } from 'antd';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <AppLayout>
      <div style={{ padding: "60px 80px", background: "#f5f7fa" }}>
        
        {/* HEADER SECTION */}
        <Row justify="center" style={{ textAlign: "center", marginBottom: 50 }}>
          <Col xs={24} md={16}>
            <InfoCircleOutlined style={{ fontSize: 50, color: "#1677ff" }} />
            <Title level={2} style={{ marginTop: 20 }}>
              About Cartifya
            </Title>
            <Text type="secondary" style={{ fontSize: 16 }}>
              Your one-stop solution for online shopping
            </Text>
          </Col>
        </Row>

        {/* DESCRIPTION CARD */}
        <Row justify="center" style={{ marginBottom: 60 }}>
          <Col xs={24} md={18}>
            <Card
              style={{
                borderRadius: 16,
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
              }}
            >
              <Paragraph>
                Cartifya is a full-stack e-commerce web application built to provide
                a seamless and professional online shopping experience.
              </Paragraph>

              <Paragraph>
                Key Features:
              </Paragraph>

              <ul style={{ paddingLeft: 20 }}>
                <li>Responsive UI using React & Ant Design</li>
                <li>User Authentication (Login / Register)</li>
                <li>Shopping Cart Functionality</li>
                <li>Product Categories & Filtering</li>
                <li>Modern and Interactive UI/UX</li>
              </ul>

              <Paragraph style={{ marginTop: 20 }}>
                The goal of this project was to build a clean, scalable,
                and maintainable e-commerce platform with strong
                focus on component reusability and state management.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* DEVELOPER SECTION */}
    {/* DEVELOPER SECTION */}
<Row justify="center">
  <Col xs={20} md={8}>
    <Card
      style={{
        textAlign: "center",
        borderRadius: 16,
        boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Title level={4}>Meet the Developer</Title>
      <Divider />

      <Avatar
        size={120}
        src="https://media.licdn.com/dms/image/v2/D5603AQH8XJjt83Xk8g/profile-displayphoto-scale_200_200/B56ZwFtvUsJoAY-/0/1769622404614?e=1772668800&v=beta&t=Lit9VpFy83c_vFmJc6Tdox__-2i-ErtLKufOuieXlH8"
        style={{
          marginBottom: 15,
          border: "4px solid #1677ff",
        }}
      />

      <Title level={5} style={{ marginBottom: 5 }}>
        Ritvij Verma
      </Title>

      <Text type="secondary">
        Full-Stack Developer
      </Text>

      <Divider />

      {/* Social Links */}
      <Space size="large">
        <a
          href="https://github.com/ritvijverma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined style={{ fontSize: 24 }} />
        </a>

        <a
          href="https://www.linkedin.com/in/ritvij-verma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined style={{ fontSize: 24, color: "#0A66C2" }} />
        </a>

        <a
          href="https://instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramOutlined style={{ fontSize: 24, color: "#E4405F" }} />
        </a>
      </Space>
    </Card>
  </Col>
</Row>


      </div>
    </AppLayout>
  );
};

export default About;
