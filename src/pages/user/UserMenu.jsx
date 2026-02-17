// import React from "react";
// import { Card, Menu, Typography } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import { NavLink, useLocation } from "react-router-dom";

// const { Title } = Typography;

// const UserMenu = () => {
//   const location = useLocation();

//   return (
//     <Card
//       style={{
//         width: 260,
//         minHeight: "100vh",
//         borderRadius: 0,
//       }}
//       bodyStyle={{ padding: 0 }}
//     >
//       {/* Header */}
//       <Title
//         level={5}
//         style={{
//           padding: "16px",
//           textAlign: "center",
//           marginBottom: 0,
//         }}
//       >
//         User Panel
//       </Title>

//       {/* Menu */}
//       <Menu
//         mode="inline"
//         selectedKeys={[location.pathname]}
//         style={{ borderRight: 0 }}
//       >
//         <Menu.Item
//     key="/dashboard/user/profile"
//             icon={<UserOutlined />}
//         >
//           <NavLink to="/dashboard/user/profile"
// >
//             Update Profile
//           </NavLink>
//         </Menu.Item>
//       </Menu>
//     </Card>
//   );
// };

// export default UserMenu;



import React from "react";
import { Layout, Menu, Typography, Avatar } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { Title, Text } = Typography;

const UserMenu = () => {
  const location = useLocation();

  return (
    <Sider
      width={260}
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          padding: "24px 16px",
          textAlign: "center",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ marginBottom: 12 }}
        />
        <Title level={5} style={{ marginBottom: 0 }}>
          User Panel
        </Title>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Welcome Back 👋
        </Text>
      </div>

      {/* Menu */}
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{
          borderRight: "none",
          marginTop: 10,
        }}
      >
        <Menu.Item
          key="/dashboard/user/profile"
          icon={<UserOutlined />}
        >
          <NavLink to="/dashboard/user/profile">
            Update Profile
          </NavLink>
        </Menu.Item>

        {/* <Menu.Item
          key="/dashboard/user"
          icon={<DashboardOutlined />}
        >
          <NavLink to="/dashboard/user">
            Dashboard Home
          </NavLink>
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default UserMenu;

