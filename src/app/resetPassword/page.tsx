"use client";

import { useState, FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const fieldSx = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    borderRadius: 4,
  },
};

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (!password || !confirmPassword) {
      setError("Semua field harus diisi.");
      return;
    }

    if (password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak cocok.");
      return;
    }

    setLoading(true);

    // TODO:
    // Ambil token dari URL
    // Kirim password baru + token ke API

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        router.push("/login");
      }, 2000);
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
        sx={{
          width: "100%",
          maxWidth: 520,
          p: { xs: 3, md: 5 },
          borderRadius: 4,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Image
            src="/aska/logo.png"
            alt="logo"
            width={120}
            height={64}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1,
            textAlign: "center",
          }}
        >
          Reset Kata Sandi
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            textAlign: "center",
          }}
        >
          Masukkan kata sandi baru untuk akun Anda.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Password berhasil diperbarui. Mengalihkan ke halaman login...
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Password Baru"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={fieldSx}
            disabled={loading}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      disabled={loading}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            label="Konfirmasi Password Baru"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            sx={fieldSx}
            disabled={loading}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                      disabled={loading}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            {loading ? "Menyimpan..." : "Simpan Password Baru"}
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <MuiLink
            href="/login"
            sx={{
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Kembali ke Login
          </MuiLink>
        </Box>
      </Paper>
    </Box>
  );
}