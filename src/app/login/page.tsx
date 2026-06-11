"use client";

import { useState, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link as MuiLink,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";

const fieldSx = {
  mb: 2,
  "& .MuiOutlinedInput-root": { borderRadius: 4 },
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email dan kata sandi harus diisi.");
      return;
    }
    // TODO: panggil API login
    console.log({ email, password });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{ width: "100%", maxWidth: 520, p: { xs: 3, md: 5 }, borderRadius: 4 }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Image src="/aska/logo.png" alt="logo" width={120} height={64} />
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: "center" }}>
          Masuk
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: "center" }}>
          Masuk menggunakan email dan kata sandi Anda.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={fieldSx}
          />

          <FormControl fullWidth variant="outlined" sx={{ ...fieldSx, mb: 0 }}>
            <InputLabel htmlFor="login-password">Kata Sandi</InputLabel>
            <OutlinedInput
              id="login-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Kata Sandi"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? "sembunyikan kata sandi" : "tampilkan kata sandi"}
                    onClick={() => setShowPassword((s) => !s)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1, mb: 2 }}>
            <MuiLink href="/forgotPassword" underline="hover" variant="body2">
              Lupa kata sandi?
            </MuiLink>
          </Box>

          {error && (
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ borderRadius: 4, py: 1.6, textTransform: "none" }}
          >
            Masuk
          </Button>

          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Belum punya akun?{" "}
            <MuiLink href="/register" underline="hover">
              Daftar di sini
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}