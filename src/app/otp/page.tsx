"use client";

import { useEffect, useState, FormEvent } from "react";
import {
	Box,
	Button,
	Paper,
	TextField,
	Typography,
	Link as MuiLink,
} from "@mui/material";
import Image from "next/image";

const fieldSx = { mb: 2, "& .MuiOutlinedInput-root": { borderRadius: 4 } };

export default function OTPPage() {
	const [code, setCode] = useState("");
	const [error, setError] = useState("");
	const [seconds, setSeconds] = useState(60);

	useEffect(() => {
		if (seconds <= 0) return;
		const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
		return () => clearTimeout(t);
	}, [seconds]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setError("");
		if (code.trim().length !== 6) {
			setError("Kode OTP harus 6 digit.");
			return;
		}
		// TODO: panggil API verifikasi OTP
		console.log("Verifikasi OTP", code);
	};

	const handleResend = () => {
		// TODO: panggil API resend
		console.log("Resend OTP requested");
		setSeconds(60);
	};

	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				p: 2,
			}}
		>
			<Paper elevation={3} sx={{ width: "100%", maxWidth: 520, p: { xs: 3, md: 5 }, borderRadius: 4 }}>
				<Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
					<Image src="/aska/logo.png" alt="logo" width={120} height={64} />
				</Box>

				<Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: "center" }}>
					Verifikasi OTP
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: "center" }}>
					Masukkan 6 digit kode yang dikirim ke email atau nomor Anda.
				</Typography>

				<Box component="form" onSubmit={handleSubmit} noValidate>
					<TextField
						label="Kode OTP"
						type="text"
						inputProps={{ maxLength: 6, inputMode: "numeric", pattern: "[0-9]*" }}
						value={code}
						onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ""))}
						fullWidth
						sx={fieldSx}
					/>

					{error && (
						<Typography color="error" variant="body2" sx={{ mb: 2 }}>
							{error}
						</Typography>
					)}

					<Button type="submit" variant="contained" fullWidth sx={{ borderRadius: 4, py: 1.6, textTransform: "none" }}>
						Verifikasi
					</Button>

					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
						<Typography variant="body2">Belum menerima kode?</Typography>
						<Button variant="text" onClick={handleResend} disabled={seconds > 0}>
							{seconds > 0 ? `Kirim ulang (${seconds}s)` : "Kirim ulang"}
						</Button>
					</Box>

					<Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
						Kembali ke{' '}
						<MuiLink href="/login" underline="hover">
							Masuk
						</MuiLink>
					</Typography>
				</Box>
			</Paper>
		</Box>
	);
}

