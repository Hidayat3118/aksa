"use client";

import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function PilihanPendaftaranForm() {
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
    },
  };

  return (
    <Grid container spacing={3}>
      {/* Jalur Seleksi */}
      <Grid size={{ xs: 12, md: 6 }}  >
        <FormControl
          fullWidth
          required
          sx={inputStyle}
        >
          <InputLabel>Jalur Seleksi</InputLabel>

          <Select label="Jalur Seleksi">
            <MenuItem value="mandiri">
              Mandiri
            </MenuItem>

            <MenuItem value="prestasi">
              Prestasi
            </MenuItem>

            <MenuItem value="beasiswa">
              Beasiswa
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Pilihan Prodi 1 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl
          fullWidth
          required
          sx={inputStyle}
        >
          <InputLabel>Pilihan Prodi 1</InputLabel>

          <Select label="Pilihan Prodi 1">
            <MenuItem value="informatika">
              Informatika
            </MenuItem>

            <MenuItem value="sistem_informasi">
              Sistem Informasi
            </MenuItem>

            <MenuItem value="teknik_industri">
              Teknik Industri
            </MenuItem>

            <MenuItem value="manajemen">
              Manajemen
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Pilihan Prodi 2 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl
          fullWidth
          required
          sx={inputStyle}
        >
          <InputLabel>Pilihan Prodi 2</InputLabel>

          <Select label="Pilihan Prodi 2">
            <MenuItem value="informatika">
              Informatika
            </MenuItem>

            <MenuItem value="sistem_informasi">
              Sistem Informasi
            </MenuItem>

            <MenuItem value="teknik_industri">
              Teknik Industri
            </MenuItem>

            <MenuItem value="manajemen">
              Manajemen
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}