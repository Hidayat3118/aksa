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

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password || !confirmPassword) {
      setError("Semua field harus diisi.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi tidak cocok.");
      return;
    }
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
          Daftar
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: "center" }}>
          Buat akun baru untuk melanjutkan pendaftaran.
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

          <FormControl fullWidth variant="outlined" sx={fieldSx}>
            <InputLabel htmlFor="register-password">Password</InputLabel>
            <OutlinedInput
              id="register-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
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

          <FormControl fullWidth variant="outlined" sx={{ ...fieldSx, mb: 1.5 }}>
            <InputLabel htmlFor="register-confirm">Konfirmasi Password</InputLabel>
            <OutlinedInput
              id="register-confirm"
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Konfirmasi Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showConfirm ? "sembunyikan konfirmasi" : "tampilkan konfirmasi"}
                    onClick={() => setShowConfirm((s) => !s)}
                    edge="end"
                  >
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {error && (
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ borderRadius: 4, mt: 2, py: 1.6, textTransform: "none" }}
          >
            Daftar
          </Button>

          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Sudah punya akun?{" "}
            <MuiLink href="/login" underline="hover">
              Masuk di sini
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}