
import React, { useState } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Space,
  Drawer,
  Grid,
} from "antd";
import {
  ShopOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";
import GlobalSearchBar from "../Form/GlobalSearchBar";
import axios from "axios";
const { Header } = Layout;
const { useBreakpoint } = Grid;

const publicPages = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "Cart", path: "/cart" },
  { label: "About Us", path: "/about" },
];

const authPages = [
  { label: "Register", path: "/register" },
  { label: "Login", path: "/login" },
];

const AppHeader = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate(); 
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const handleLogout = () => {
  //   setAuth({ user: null, token: "" });
  //   localStorage.removeItem("auth");
  //   toast.success("Logout Successfully");
  //   navigate("/login");
  // };

  const handleLogout = async () =>{
  try{
      await axios.post("/api/v1/auth/logout");
    toast.success("Logout Sucsessfully")

  }catch(error){
    console.log(error)
    toast.error("Logout Error", error)
  }
  finally{
    setAuth({user:null,token :""})
    localStorage.removeItem("auth");
    navigate("/login")
  }
  }

  // ✅ Desktop menu items
  const desktopMenuItems = [
    ...publicPages.map((page) => ({
      key: page.path,
      label: <NavLink to={page.path}>{page.label}</NavLink>,
    })),
    ...(!auth?.user
      ? authPages.map((page) => ({
          key: page.path,
          label: <NavLink to={page.path}>{page.label}</NavLink>,
        }))
      : []),
  ];

  // ✅ Drawer menu items
  const drawerMenuItems = [
    ...publicPages.map((page) => ({
      key: page.path,
      label: (
        <NavLink to={page.path} onClick={() => setDrawerOpen(false)}>
          {page.label}
        </NavLink>
      ),
    })),
    ...(!auth?.user
      ? authPages.map((page) => ({
          key: page.path,
          label: (
            <NavLink to={page.path} onClick={() => setDrawerOpen(false)}>
              {page.label}
            </NavLink>
          ),
        }))
      : []),
    ...(auth?.user
      ? [
          {
            key: "dashboard",
            label: (
              <NavLink
                to={
                  auth?.user?.role === 1
                    ? "/dashboard/admin"
                    : "/dashboard/user"
                }
                onClick={() => setDrawerOpen(false)}
              >
                Dashboard
              </NavLink>
            ),
          },
          {
            key: "logout",
            label: (
              <span
                onClick={() => {
                  handleLogout();
                  setDrawerOpen(false);
                }}
              >
                Logout
              </span>
            ),
          },
        ]
      : []),
  ];

  const userMenuItems = [
    {
      key: "dashboard",
      label: (
        <NavLink
          to={
            auth?.user?.role === 1
              ? "/dashboard/admin"
              : "/dashboard/user"
          }
        >
          Dashboard
        </NavLink>
      ),
    },
    {
      key: "logout",
      label: <span onClick={handleLogout}>Logout</span>,
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#001529",
          padding: "0 20px",
        }}
      >
        {/* LOGO */}
        <NavLink
          to="/"
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ShopOutlined style={{ fontSize: 24, marginRight: 8 }} />
          Cartifya
        </NavLink>

        {/* DESKTOP */}
        {!isMobile && (
          <>
            <div style={{ marginLeft: 40 }}>
              <GlobalSearchBar />
            </div>

            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={desktopMenuItems}
              style={{
                flex: 1,
                justifyContent: "center",
                background: "transparent",
                borderBottom: "none",
              }}
            />

            {auth?.user && (
              <Dropdown menu={{ items: userMenuItems }}>
                <Space style={{ cursor: "pointer", color: "white" }}>
                  <Avatar icon={<UserOutlined />} />
                  {auth.user.name}
                </Space>
              </Dropdown>
            )}
          </>
        )}

        {/* MOBILE */}
        {isMobile && (
          <>
            <MenuOutlined
              onClick={() => setDrawerOpen(true)}
              style={{ color: "white", fontSize: 22 }}
            />

            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
            >
              <div style={{ marginBottom: 20 }}>
                <GlobalSearchBar />
              </div>

              <Menu mode="vertical" items={drawerMenuItems} />
            </Drawer>
          </>
        )}
      </Header>
    </Layout>
  );
};

export default AppHeader;
