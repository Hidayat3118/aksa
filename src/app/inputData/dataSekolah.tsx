"use client";

import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function DataSekolahForm() {
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
    },
  };

  return (
    <Grid container spacing={3}>
      {/* Asal Sekolah */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Asal Sekolah"
          helperText="Contoh: SMA Negeri 1 Banjarmasin"
          sx={inputStyle}
        />
      </Grid>

      {/* Jenis Sekolah */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl
          fullWidth
          required
          sx={inputStyle}
        >
          <InputLabel>Jenis Sekolah</InputLabel>

          <Select label="Jenis Sekolah">
            <MenuItem value="SMA">SMA</MenuItem>
            <MenuItem value="SMK">SMK</MenuItem>
            <MenuItem value="MA">MA</MenuItem>
            <MenuItem value="Paket-C">Paket C</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Jurusan */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Jurusan"
          helperText="Contoh: IPA, IPS, TKJ, RPL"
          sx={inputStyle}
        />
      </Grid>

      {/* Tahun Lulus */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          type="number"
          label="Tahun Lulus"
          placeholder="2025"
          sx={inputStyle}
        />
      </Grid>
    </Grid>
  );
}