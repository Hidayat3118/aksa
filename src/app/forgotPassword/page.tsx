"use client";

import { useState, FormEvent } from "react";
import {
  Box,
  Button,
  Link as MuiLink,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const fieldSx = {
  mb: 2,
  "& .MuiOutlinedInput-root": { borderRadius: 4 },
};

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Email harus diisi.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Format email tidak valid.");
      return;
    }

    setLoading(true);
    // TODO: panggil API untuk mengirim reset password link
    console.log({ email });
    
    // Simulasi delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1000);
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
          Lupa Kata Sandi
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: "center" }}>
          Masukkan email Anda dan kami akan mengirimkan link untuk mereset kata sandi.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Link reset kata sandi telah dikirim ke email Anda. Silakan cek inbox atau folder spam.
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={fieldSx}
            disabled={loading}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              mb: 2,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              borderRadius: 3,
            }}
            disabled={loading}
          >
            {loading ? "Mengirim..." : "Kirim Link Reset"}
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Ingat kata sandi?
          </Typography>
          <MuiLink
            href="/login"
            sx={{
              textDecoration: "none",
              color: "primary.main",
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Masuk
          </MuiLink>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Belum memiliki akun?
          </Typography>
          <MuiLink
            href="/register"
            sx={{
              textDecoration: "none",
              color: "primary.main",
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Daftar
          </MuiLink>
        </Box>
      </Paper>
    </Box>
  );
}
