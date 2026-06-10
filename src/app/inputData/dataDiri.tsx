"use client";

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

export default function DataDiriForm() {
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
    },
  };
  return (
    <Grid container spacing={3}>
      {/* nik */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Nomor Induk Kependudukan (NIK)"
          helperText="Masukkan 16 digit NIK sesuai KTP/KK"
          sx={inputStyle}
        />
      </Grid>
      {/* nisn */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Nomor Induk Siswa Nasional (NISN)"
          helperText="Masukkan NISN sesuai data sekolah"
          sx={inputStyle}
        />
      </Grid>

      {/* Baris 2 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth required label="Nama Lengkap" sx={inputStyle} />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth required sx={inputStyle}>
          <InputLabel>Jenis Kelamin</InputLabel>
          <Select required label="Jenis Kelamin">
            <MenuItem value="L">Laki-laki</MenuItem>
            <MenuItem value="P">Perempuan</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Baris 3 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth required label="Tempat Lahir" sx={inputStyle} />
      </Grid>

      {/* date */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="date"
          required
          label="Tanggal Lahir"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </Grid>

      {/* Baris 4 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          type="email"
          label="Email"
          sx={inputStyle}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField fullWidth required label="Nomor HP" sx={inputStyle} />
      </Grid>

      {/* Baris 5 */}
      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          required
          multiline
          rows={4}
          label="Alamat"
          sx={inputStyle}
        />
      </Grid>
    </Grid>
  );
}
