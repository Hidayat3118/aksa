"use client";

import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function SelesaiPage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: 860,
          width: "100%",
          p: { xs: 4, md: 5 },
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              bgcolor: "success.main",
              color: "common.white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
            }}
          >
            <CheckCircleOutlinedIcon sx={{ fontSize: 44 }} />
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Pendaftaran Berhasil!
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 620, mx: "auto" }}
            >
              Semua langkah pendaftaran telah selesai. Tim pendaftaran kami akan
              meninjau data Anda dan mengirimkan konfirmasi dalam waktu singkat.
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{ width: "100%", mt: 1 }}
          >
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 3,
                borderRadius: 4,
                bgcolor: "grey.50",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}
              >
                <AccessTimeOutlinedIcon color="primary" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Estimasi Proses
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Mohon tunggu maksimal 1x24 jam. Kami akan memberi tahu Anda via
                email atau WhatsApp.
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 3,
                borderRadius: 4,
                bgcolor: "rgba(244, 180, 0, 0.08)",
                border: "1px solid",
                borderColor: "warning.light",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}
              >
                <InfoOutlinedIcon color="warning" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Langkah Selanjutnya
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Pastikan data kontak Anda aktif. Simpan bukti pendaftaran untuk
                referensi jika diperlukan.
              </Typography>
            </Paper>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4, borderRadius: 4, px: 4, py: 1.5, minWidth: 220 }}
            startIcon={<SendOutlinedIcon />}
          >
            Kembali ke Beranda
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
