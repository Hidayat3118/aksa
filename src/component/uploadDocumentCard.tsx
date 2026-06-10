"use client";

import { ChangeEvent } from "react";
import {
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";

type UploadDocumentCardProps = {
  label: string;
  required?: boolean;
  fileName?: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadDocumentCard({
  label,
  required = false,
  fileName,
  error,
  onChange,
}: UploadDocumentCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: "100%",
        border: "2px dashed",
        borderColor: "divider",
        borderRadius: 4,
        transition: "0.2s",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            bgcolor: "primary.50",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UploadFileOutlinedIcon
            color="primary"
            sx={{ fontSize: 32 }}
          />
        </Box>

        <Typography
          variant="h6"
          fontWeight={600}
        >
          {label}
          {required && (
            <Typography
              component="span"
              color="error"
            >
              {" "}
              *
            </Typography>
          )}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Format: JPG, PNG, PDF
          <br />
          Maksimal ukuran 2 MB
        </Typography>

        <Button
          component="label"
          variant="outlined"
          size="large"
          sx={{
            borderRadius: 3,
            textTransform: "none",
            minWidth: 160,
          }}
        >
          Pilih File
          <input
            hidden
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={onChange}
          />
        </Button>

        {fileName && (
          <Typography
            variant="body2"
            color="success.main"
          >
            ✓ {fileName}
          </Typography>
        )}

        {error && (
          <Typography
            variant="body2"
            color="error"
          >
            {error}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}   