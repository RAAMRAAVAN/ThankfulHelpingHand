"use client";
import { Box, Button, Grid, Typography } from "@mui/material";

import ScrollReveal from "@/app/(components)/Animation/ScrollReveal";
import DoctorSlider from '../../(components)/DoctorCard/DoctorSlider';

const Entries = ({doctors}) => {
  // const { entries } = props;
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
