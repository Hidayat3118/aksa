"use client";

import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import UploadDocumentCard from "@/component/uploadDocumentCard";

const documents = [
  {
    label: "Rapor Semester 1-5",
    required: true,
  },
  {
    label: "Sertifikat Prestasi",
    required: true,
  },
  {
    label: "Pas Foto",
    required: true,
  },
  {
    label: "Kartu Keluarga",
    required: true,
  },
];

export default function JalurPrestasi() {
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
    },
  };

  return (
    <Grid container spacing={3}>
      {/* Rata-rata Nilai Rapor */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          type="number"
          label="Rata-rata Nilai Rapor"
          placeholder="Contoh: 87.50"
          sx={inputStyle}
        />
      </Grid>

      {/* Jenis Prestasi */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl
          fullWidth
          required
          sx={inputStyle}
        >
          <InputLabel>Jenis Prestasi</InputLabel>

          <Select label="Jenis Prestasi">
            <MenuItem value="Akademik">
              Akademik
            </MenuItem>

            <MenuItem value="Non Akademik">
              Non Akademik
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Tingkat Prestasi */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl
          fullWidth
          required
          sx={inputStyle}
        >
          <InputLabel>Tingkat Prestasi</InputLabel>

          <Select label="Tingkat Prestasi">
            <MenuItem value="Sekolah">
              Sekolah
            </MenuItem>

            <MenuItem value="Kabupaten/Kota">
              Kabupaten / Kota
            </MenuItem>

            <MenuItem value="Provinsi">
              Provinsi
            </MenuItem>

            <MenuItem value="Nasional">
              Nasional
            </MenuItem>

            <MenuItem value="Internasional">
              Internasional
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Nama Kejuaraan */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Nama Kejuaraan"
          placeholder="Contoh: Olimpiade Matematika"
          sx={inputStyle}
        />
      </Grid>

      {/* Tahun Prestasi */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          type="number"
          label="Tahun Prestasi"
          placeholder="2025"
          sx={inputStyle}
        />
      </Grid>

      {/* Upload Berkas */}
      <Grid size={{ xs: 12 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          mt={2}
          mb={1}
        >
          Upload Berkas
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
        >
          Unggah seluruh dokumen yang diperlukan untuk proses
          verifikasi nilai dan prestasi.
        </Typography>
      </Grid>

      {documents.map((doc) => (
        <Grid
          key={doc.label}
          size={{ xs: 12, md: 6 }}
        >
          <UploadDocumentCard
            label={doc.label}
            required={doc.required}
            onChange={() => {}}
          />
        </Grid>
      ))}
    </Grid>
  );
}