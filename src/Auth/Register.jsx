import React from "react";
import Layout from "../components/Layouts/Layout";
import Card from "@mui/material/Card";
import { CardContent, Typography, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      answer:""
    },
  });
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/v1/auth/register",  data );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      // Display server error message if available, otherwise show generic error
      const errorMessage = error.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };

  return (
    <Layout>
      <Card sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Register Form
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              rules={{ required: " Name is Required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label=" Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is Required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error ? error.message : null}
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
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Phone is Required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              name="address"
              control={control}
              rules={{ required: "Address is Required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error ? error.message : null}
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
                  label="What is your Favourite Sports"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Register
            </Button>
          </form>{" "}
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Register;
