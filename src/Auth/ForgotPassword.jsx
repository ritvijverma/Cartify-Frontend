import React from "react";
import Layout from "../components/Layouts/Layout";
import Card from "@mui/material/Card";
import { CardContent, Typography, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();


  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      newPassword: "",
      answer: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `/api/v1/auth/forgot-password`,
        data
      );

      if (res?.data?.success) {
        toast.success(res.data.message);
        navigate('/login')


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
    <Layout title="Forgot Password - Cartifya App">
      <Card sx={{ maxWidth: 400, mx: "auto", mt: 8, p: 2 }}>
        <Typography variant="h5" gutterBottom>
          RESET PASSWORD
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
              name="answer"
              control={control}
              rules={{ required: "Answer is Required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Answer "
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
              name="newPassword"
              control={control}
              rules={{ required: "New Password is Required" }}
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
              Reset
            </Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ForgotPassword;
