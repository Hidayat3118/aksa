"use client";
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = [
  "Data Diri",
  "Data Sekolah",
  "Pilihan Pendaftaran",
  "Persyaratan Jalur",
  "Pembayaran",
];

export default function RegisterPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // fungsi untuk next stepper
  function handleNext() {
    setActiveStep((prev) => prev + 1);
  }
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        py: 5,
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 1000,
          mx: "auto",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            bgcolor: "#163A70",
            color: "#fff",
            px: 4,
            py: 3,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
          //   ini logo nya
        >
          <Avatar
            src="/aska/logo.png"
            sx={{
              width: 40,
              height: 40,
            }}
          />

          <Typography variant="h5" fontWeight={700}>
            AKSA — Pendaftaran Mahasiswa Baru
          </Typography>
        </Box>

        {/* CONTENT */}
        <Box
          sx={{
            p: {
              xs: 3,
              md: 5,
            },
          }}
        >
          {/* STEPPER */}
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
              mb: 6,

              "& .MuiStepIcon-root.Mui-active": {
                color: "#F4B400",
              },

              "& .MuiStepIcon-root.Mui-completed": {
                color: "#F4B400",
              },
            }}
          >
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* TITLE */}
          <Box mb={4}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Data Calon Mahasiswa
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={4}
              sx={{ my: 3 }}
            >
              Langkah 1 dari 5 — Isi data diri Anda dengan benar
            </Typography>
          </Box>

          {/* FORM */}
          

          {/* BUTTON */}
          <Button
            onclick={handleNext}
            fullWidth
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 5,
              mb: 3,
              py: 1.8,
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            Lanjut Proses Berikutnya
          </Button>

          {/* LOGIN */}
          <Typography align="center" mt={3} color="text.secondary">
            Sudah punya akun?{" "}
            <Link href="#" underline="hover">
              Masuk di sini
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
