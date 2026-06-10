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
    label: "Kartu Keluarga",
    required: true,
  },
  {
    label: "Pas Foto",
    required: true,
  },
  {
    label: "Rapor",
    required: true,
  },
  {
    label: "Surat Keterangan Penghasilan Orang Tua",
    required: true,
  },
  {
    label: "KIP / KKS",
    required: false,
  },
];

export default function JalurBeasiswa() {
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
    },
  };

  return (
    <Grid container spacing={3}>
      {/* Pekerjaan Ayah */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Pekerjaan Ayah"
          sx={inputStyle}
        />
      </Grid>

      {/* Penghasilan Ayah */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl
          fullWidth
          required
          sx={inputStyle}
        >
          <InputLabel>Penghasilan Ayah</InputLabel>

          <Select label="Penghasilan Ayah">
            <MenuItem value="<1000000">
              Kurang dari Rp1.000.000
            </MenuItem>

            <MenuItem value="1000000-3000000">
              Rp1.000.000 - Rp3.000.000
            </MenuItem>

            <MenuItem value="3000000-5000000">
              Rp3.000.000 - Rp5.000.000
            </MenuItem>

            <MenuItem value=">5000000">
              Lebih dari Rp5.000.000
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Pekerjaan Ibu */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Pekerjaan Ibu"
          sx={inputStyle}
        />
      </Grid>

      {/* Penghasilan Ibu */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl
          fullWidth
          required
          sx={inputStyle}
        >
          <InputLabel>Penghasilan Ibu</InputLabel>

          <Select label="Penghasilan Ibu">
            <MenuItem value="<1000000">
              Kurang dari Rp1.000.000
            </MenuItem>

            <MenuItem value="1000000-3000000">
              Rp1.000.000 - Rp3.000.000
            </MenuItem>

            <MenuItem value="3000000-5000000">
              Rp3.000.000 - Rp5.000.000
            </MenuItem>

            <MenuItem value=">5000000">
              Lebih dari Rp5.000.000
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Jumlah Tanggungan */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          type="number"
          label="Jumlah Tanggungan Keluarga"
          placeholder="Contoh: 4"
          sx={inputStyle}
        />
      </Grid>

      {/* Nilai Rapor */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          type="number"
          label="Nilai Rapor"
          placeholder="Contoh: 85.50"
          sx={inputStyle}
        />
      </Grid>

      {/* Prestasi */}
      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          label="Prestasi (Opsional)"
          placeholder="Contoh: Juara 1 Olimpiade Matematika Tingkat Provinsi"
          multiline
          rows={3}
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
          Unggah seluruh dokumen pendukung untuk proses
          verifikasi data ekonomi dan akademik.
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