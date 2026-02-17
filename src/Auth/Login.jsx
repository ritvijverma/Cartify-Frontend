import React from "react";
import Layout from "../components/Layouts/Layout";
import Card from "@mui/material/Card";
import { CardContent, Typography, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `/api/v1/auth/login`,
        data
      );

      if (res?.data?.success) {
        toast.success(res.data.message);

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));

        // ✅ redirect AFTER login success
        navigate(from, { replace: true });
        

        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <Card sx={{ maxWidth: 400, mx: "auto", mt: 8, p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Login Form
        </Typography>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is Required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is Required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
             <Button
              type="button"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() =>navigate('/forgot-password')}
            >
              Forgot Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Login;
