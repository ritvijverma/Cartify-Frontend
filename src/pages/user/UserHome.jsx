import React, { useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { useForm, Controller } from "react-hook-form";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UserHome = () => {
  const [auth, setAuth] = useAuth();
  // const navigate = useNavigate();

  // Step 1: Form Setup
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      answer: "",
    },
  });

  // populate form with current user data
  useEffect(() => {
    if (auth?.user) {
      reset({
        name: auth.user.name || "",
        email: auth.user.email || "",
        password: "",
        phone: auth.user.phone || "",
        address: auth.user.address || "",
        answer: auth.user.answer || "",
      });
    }
  }, [auth.user, reset]);

  // Step 2: Submit Function
  const onSubmit = async (values) => {
    try {
      const res = await axios.put("/api/v1/auth/update-profile", values);

      if (res.data?.success) {
        const updatedUser = res.data.updatedUser;
        setAuth({ ...auth, user: updatedUser });

        const lsRaw = localStorage.getItem("auth");
        const ls = lsRaw ? JSON.parse(lsRaw) : {};
        ls.user = updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));

        toast.success(res.data.message || "Profile updated successfully");
      } else {
        toast.error(res.data?.message || "Update failed");
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Something went wrong";
      toast.error(message);
    }
  };

  // Step 3: UI
  return (
    <Card sx={{ maxWidth: 450, margin: "auto", marginTop: 5, padding: 3 }}>
      <Typography variant="h5">Update Profile</Typography>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                margin="normal"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
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
            rules={{ validate: (v) => !v || v.length >= 6 || "Password must be at least 6 characters" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Phone"
                fullWidth
                margin="normal"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Address"
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
            rules={{ required: "Answer is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Favourite Sports"
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
            sx={{ marginTop: 2 }}
          >
            Update
          </Button>

        </form>
      </CardContent>
    </Card>
  );
};

export default UserHome;
