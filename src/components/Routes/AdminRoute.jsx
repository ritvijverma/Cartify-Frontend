import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet, Navigate, useLocation  } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function AdminRoute() {
  const [ok, setOk] = useState(null);
  const [auth] = useAuth(); // setAuth not needed
  const location = useLocation();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("/api/v1/auth/admin-auth");
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        setOk(false);
      }
    };
    if (auth?.token) {
        authCheck();
    } else {
        // If auth initialized but no token, immediately false
        if (auth?.token === "") setOk(false);
    }
  }, [auth?.token]);

  if (ok === null) {
      return (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
          </Box>
      );
  }

  return ok ? (
  <Outlet />
   ) : ( 
   <Navigate 
    to="/login" 
    state={{from : location.pathname}}
    replace />
  );
}
