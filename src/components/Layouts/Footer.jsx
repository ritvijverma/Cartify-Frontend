// import React from "react";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

//         {/* Brand Info */}
//         <div>
//           <h2 className="text-xl font-semibold text-white">
//             Cartifya
//           </h2>
//           <p className="mt-3 text-sm text-gray-400">
//             A modern e-commerce platform for quality products,
//             fast delivery, and secure payments.
//           </p>
//         </div>

//         {/* Customer Service */}
//         <div>
//           <h3 className="text-lg font-medium text-white mb-3">
//             Customer Service
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-white cursor-pointer">Help Center</li>
//             <li className="hover:text-white cursor-pointer">Track Order</li>
//             <li className="hover:text-white cursor-pointer">
//               Returns & Refunds
//             </li>
//             <li className="hover:text-white cursor-pointer">Shipping Info</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-lg font-medium text-white mb-3">
//             Company
//           </h3>
//           <ul className="space-y-2 text-sm">
//            <li> <NavLink to={'/about'} className="hover:text-white cursor-pointer">About Us</NavLink></li> 
//            <li> <NavLink to={'career'} className="hover:text-white cursor-pointer">Careers</NavLink> </li>
//             <li> <NavLink to={'/blog'} className="hover:text-white cursor-pointer">Blog</NavLink></li>
//            <li>  <NavLink to={'/contactus'} className="hover:text-white cursor-pointer">Contact Us</NavLink></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-medium text-white mb-3">
//             Contact
//           </h3>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>Email: ritvijverma18@gmail.com</li>
//             <li>Phone: +91-9919122238</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-700 py-6 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 text-center md:text-left">
//         <p>
//           © {new Date().getFullYear()} Cartifya. All Rights Reserved.
//         </p>

//         <p className="mt-2 md:mt-0">
//           Built with ❤️ using React & Tailwind • Designed & Developed by Ritvij
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ background: "#0f172a", padding: "50px 80px" }}>
      
      <Row gutter={[40, 40]}>
        
        {/* Brand Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff", marginBottom: 15 }}>
            Cartifya
          </Title>
          <Text style={{ color: "#94a3b8" }}>
            A modern e-commerce platform delivering quality products
            with secure and fast service.
          </Text>

          <Space size="large" style={{ marginTop: 20 }}>
            <a
              href="https://github.com/ritvijverma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined style={{ fontSize: 20, color: "#fff" }} />
            </a>

            <a
              href="https://www.linkedin.com/in/ritvij-verma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined style={{ fontSize: 20, color: "#0A66C2" }} />
            </a>

            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined style={{ fontSize: 20, color: "#E4405F" }} />
            </a>
          </Space>
        </Col>

        {/* Customer Service */}
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#fff" }}>
            Customer Service
          </Title>
          <Space direction="vertical">
            <Text style={{ color: "#94a3b8" }}>Help Center</Text>
            <Text style={{ color: "#94a3b8" }}>Track Order</Text>
            <Text style={{ color: "#94a3b8" }}>Returns & Refunds</Text>
            <Text style={{ color: "#94a3b8" }}>Shipping Info</Text>
          </Space>
        </Col>

        {/* Company */}
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#fff" }}>
            Company
          </Title>
          <Space direction="vertical">
            <NavLink to="/about">
              <Text style={{ color: "#94a3b8" }}>About Us</Text>
            </NavLink>
            <NavLink to="/career">
              <Text style={{ color: "#94a3b8" }}>Careers</Text>
            </NavLink>
            <NavLink to="/blog">
              <Text style={{ color: "#94a3b8" }}>Blog</Text>
            </NavLink>
            <NavLink to="/contactus">
              <Text style={{ color: "#94a3b8" }}>Contact Us</Text>
            </NavLink>
          </Space>
        </Col>

        {/* Contact */}
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#fff" }}>
            Contact
          </Title>
          <Space direction="vertical">
            <Text style={{ color: "#94a3b8" }}>
              Email: ritvijverma18@gmail.com
            </Text>
            <Text style={{ color: "#94a3b8" }}>
              Phone: +91-9919122238
            </Text>
          </Space>
        </Col>
      </Row>

      <Divider style={{ borderColor: "#1e293b", margin: "40px 0" }} />

      {/* Bottom Section */}
      <Row justify="space-between" align="middle">
        <Col xs={24} md={12}>
          <Text style={{ color: "#94a3b8" }}>
            © {new Date().getFullYear()} Cartifya. All Rights Reserved.
          </Text>
        </Col>

        <Col xs={24} md={12} style={{ textAlign: "right" }}>
          <Text style={{ color: "#94a3b8" }}>
            Built with ❤️ using React & Ant Design • Designed & Developed by Ritvij
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
