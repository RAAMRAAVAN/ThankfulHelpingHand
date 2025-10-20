"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import ReadMoreText from "@/app/(components)/FacilitiesNew2/ReadMoreText";
import Image from "next/image";
import ScrollReveal from "@/app/(components)/Animation/ScrollReveal";
import { color1 } from "@/app/(components)/Global";
import DoctorSlider from '../../(components)/DoctorCard/DoctorSlider';

const Entries = ({doctors}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      marginY={5}
      // border="1px black solid"
    >
          <DoctorSlider doctors={doctors}/>
    </Box>
  );
};

export default Entries;
