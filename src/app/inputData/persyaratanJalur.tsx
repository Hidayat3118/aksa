"use client";

import { useState, ChangeEvent } from "react";
import { Grid } from "@mui/material";
import UploadDocumentCard from "@/component/uploadDocumentCard";

const documents = [
  { label: "Pas Foto", required: true },
  { label: "Kartu Keluarga", required: true },
  { label: "Ijazah / SKL", required: true },
  { label: "KTP (Jika Ada)", required: false },
];

const maxFileSize = 2 * 1024 * 1024;

const allowedTypes = [
  "image/jpeg",
  "image/png",
  "application/pdf",
];

export default function PersyaratanJalurForm() {
  const [fileStatus, setFileStatus] = useState<
    Record<string, { name?: string; error?: string }>
  >({});

  const handleFileChange =
    (label: string) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) return;

      let error: string | undefined;

      if (!allowedTypes.includes(file.type)) {
        error = "Format harus JPG, PNG, atau PDF.";
      } else if (file.size > maxFileSize) {
        error = "Ukuran file maksimal 2 MB.";
      }

      setFileStatus((prev) => ({
        ...prev,
        [label]: {
          name: error ? undefined : file.name,
          error,
        },
      }));
    };

  return (
    <Grid container spacing={3}>
      {documents.map((doc) => (
        <Grid
          key={doc.label}
          size={{ xs: 12, md: 6 }}
        >
          <UploadDocumentCard
            label={doc.label}
            required={doc.required}
            fileName={fileStatus[doc.label]?.name}
            error={fileStatus[doc.label]?.error}
            onChange={handleFileChange(doc.label)}
          />
        </Grid>
      ))}
    </Grid>
  );
}