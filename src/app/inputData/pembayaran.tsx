"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

const paymentMethods = [
  { value: "bank-transfer", label: "Transfer Bank" },
  { value: "virtual-account", label: "Virtual Account" },
  { value: "ewallet", label: "E-Wallet" },
];

const bankSummary = {
  bankName: "Bank Nusantara",
  accountName: "AKSA Pendaftaran",
  accountNumber: "1234 5678 9012 3456",
  amount: 250000,
};

const maxProofSize = 2 * 1024 * 1024;
const allowedProofTypes = ["image/jpeg", "image/png", "application/pdf"];

export default function PembayaranForm() {
  const [paymentMethod, setPaymentMethod] = useState<string>(
    paymentMethods[0].value,
  );
  const [payerName, setPayerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofError, setProofError] = useState("");

  const handleMethodChange = (event: SelectChangeEvent<string>) => {
    setPaymentMethod(event.target.value);
  };

  const handleProofChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setProofFile(null);
      setProofError("");
      return;
    }

    if (!allowedProofTypes.includes(file.type)) {
      setProofFile(null);
      setProofError("File harus JPG, PNG, atau PDF.");
      return;
    }

    if (file.size > maxProofSize) {
      setProofFile(null);
      setProofError("Ukuran bukti maksimal 2 MB.");
      return;
    }

    setProofFile(file);
    setProofError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!payerName || !phoneNumber || !transferDate || !proofFile) {
      setProofError(
        proofFile ? "" : "Unggah bukti pembayaran terlebih dahulu.",
      );
      return;
    }

    // Submit handling nanti bisa ditambahkan sesuai kebutuhan
    console.log({
      paymentMethod,
      payerName,
      phoneNumber,
      transferDate,
      proofFile,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 6,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Pembayaran Pendaftaran
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Selesaikan pembayaran untuk mengunci pendaftaran Anda.
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              Instruksi Transfer
            </Typography>
            <Paper
              elevation={1}
              sx={{ p: 3, borderRadius: 2, mb: 3, bgcolor: "grey.50" }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {bankSummary.bankName}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5 }}
              >
                No. Rekening: <strong>{bankSummary.accountNumber}</strong>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5 }}
              >
                Atas Nama: <strong>{bankSummary.accountName}</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jumlah:{" "}
                <strong>Rp {bankSummary.amount.toLocaleString("id-ID")}</strong>
              </Typography>
            </Paper>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              Catatan
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Pastikan nama dan nomor rekening sesuai. Unggah bukti transfer
              agar pembayaran dapat diverifikasi.
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Total Pembayaran
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
              Rp {bankSummary.amount.toLocaleString("id-ID")}
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 6,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Form Pembayaran
            </Typography>

            <Grid container spacing={3}>
              {/* Metode Transfer */}
              <Grid size={{ xs: 12 }}>
                <FormControl fullWidth>
                  <InputLabel id="payment-method-label">
                    Metode Transfer
                  </InputLabel>
                  <Select
                    labelId="payment-method-label"
                    value={paymentMethod}
                    label="Metode Transfer"
                    onChange={handleMethodChange}
                    sx={{ borderRadius: 2 }}
                  >
                    {paymentMethods.map((method) => (
                      <MenuItem key={method.value} value={method.value}>
                        {method.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* nama pemilik rekening */}
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Nama Pemilik Rekening"
                  placeholder="Nama sesuai rekening"
                  value={payerName}
                  onChange={(event) => setPayerName(event.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>
              {/* nomor telepon */}
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Nomor Telepon"
                  placeholder="0812xxxxxxxx"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>
              {/* Tanggal Transfer */}
              <Grid size={{ xs: 12}}>
                <TextField
                  fullWidth
                  type="date"
                  required
                   sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                  label="Tanggal Transfer"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button
                  component="label"
                  variant="outlined"
                  fullWidth
                  sx={{ textTransform: "none", borderRadius: 2, py: 1.5 }}
                >
                  Unggah Bukti Pembayaran
                  <input
                    hidden
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleProofChange}
                  />
                </Button>
                {proofFile && (
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ mt: 1 }}
                  >
                    Bukti terpilih: {proofFile.name}
                  </Typography>
                )}
                {proofError && (
                  <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    {proofError}
                  </Typography>
                )}
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ textTransform: "none", borderRadius: 2, py: 1.6 }}
                >
                  Kirim Bukti Pembayaran
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
