"use client";

import { useState, ChangeEvent } from "react";
import { Grid } from "@mui/material";
import UploadDocumentCard from "@/component/uploadDocumentCard";
import JalurMandiri from "./jalur/mandiri";
import JalurPrestasi  from "./jalur/prestasi";
import JalurBeasiswa  from "./jalur/beasiswa";



export default function PersyaratanJalurForm() {

  return (
    <Grid container spacing={3}>
     {/* <JalurMandiri/> */}
     {/* <JalurPrestasi/> */}
     <JalurBeasiswa/>
    </Grid>
  );
}