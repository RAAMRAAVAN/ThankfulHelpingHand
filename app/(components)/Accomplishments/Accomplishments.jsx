"use client";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { color4, Font } from "../Global";
import AnimatedCounter from "../Animation/AnimatedCounter";
import ScrollReveal from "../Animation/ScrollReveal";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Get ordinal suffix
  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${month} ${year}`;
}

const Accomplishments = ({ accomplishments }) => {
  const Data = {
    addedBy: 1,
    chemo: 1395,
    created_at: "2025-10-10 04:17:41",
    date: "2025-09-30",
    doctors: 50,
    hospitalId: "1",
    id: 43,
    patient: 8119,
    radiation: 3229,
    total_beds: 350,
  };
  const theme = useTheme();
  const AnimationDuration = 1500;
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // True for mobile screens

  return (
    <>
      <Box display="none" width="100%" justifyContent="center">
        <Typography zIndex={2} color="black" textAlign="center">
          {formatDate(accomplishments.date)}
        </Typography>
      </Box>
      <ScrollReveal animation="grow" timeout={1000}>
        <Box display="flex" width="100%" justifyContent="center">
          <Grid
            container
            // spacing={2}
            marginX={5}
            marginY={3}
            gap={1}
            justifyContent="center"
          >
            <Grid
              item
              lg={2.7}
              sx={{ cursor: "pointer" }}
              md={3}
              sm={4}
              xs={12}
              backgroundColor="white"
              borderRadius={2}
              paddingY={2}
              boxShadow={5}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box display="flex">
                <AnimatedCounter
                  end={20}
                  duration={AnimationDuration}
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                >
                  +
                </Typography>
              </Box>
              <Typography fontWeight="bold" color="gray" fontSize={17}>
                THOUSAND
              </Typography>
              <Typography textAlign="center">
                children and their families are impacted every year
              </Typography>
            </Grid>

            <Grid
              item
              lg={2.7}
              sx={{ cursor: "pointer" }}
              md={3}
              sm={4}
              xs={12}
              border="1px black sold"
              backgroundColor="white"
              borderRadius={2}
              paddingY={2}
              boxShadow={5}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box display="flex">
                <AnimatedCounter
                  end={200}
                  duration={AnimationDuration}
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                >
                  +
                </Typography>
              </Box>
              <Typography fontWeight="bold" color="gray" fontSize={17}>
                VILLAGES
              </Typography>
              <Typography textAlign="center">
                and slums are reached out to across the country
              </Typography>
            </Grid>

            <Grid
              item
              lg={2.7}
              sx={{ cursor: "pointer" }}
              md={3}
              sm={4}
              xs={12}
              border="1px black sold"
              backgroundColor="white"
              borderRadius={2}
              paddingY={2}
              boxShadow={5}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box display="flex">
                <AnimatedCounter
                  end={30}
                  duration={AnimationDuration}
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                >
                  +
                </Typography>
              </Box>
              <Typography fontWeight="bold" color="gray" fontSize={17}>
                PROJECTS
              </Typography>
              <Typography textAlign="center">
                focused on education, healthcare, and women empowerment
              </Typography>
            </Grid>

            <Grid
              item
              lg={2.7}
              sx={{ cursor: "pointer" }}
              md={3}
              sm={4}
              xs={12}
              border="1px black sold"
              backgroundColor="white"
              borderRadius={2}
              paddingY={2}
              boxShadow={5}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box display="flex">
                <AnimatedCounter
                  end={2}
                  duration={AnimationDuration}
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                >
                  +
                </Typography>
              </Box>
              <Typography fontWeight="bold" color="gray" fontSize={17}>
                STATES
              </Typography>
              <Typography textAlign='center'>are reached including the remotest areas</Typography>
            </Grid>

            {/* <Grid
              item
              lg={3}
              sx={{ cursor: "pointer" }}
              md={3}
              sm={4}
              xs={12}
              border="1px black sold"
              backgroundColor="white"
              borderRadius={2}
              paddingY={2}
              boxShadow={5}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box display="flex">
                <AnimatedCounter
                  end={accomplishments.total_beds || 44}
                  duration={AnimationDuration}
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={color4}
                  // sx={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
                >
                  +
                </Typography>
              </Box>
              <Typography fontWeight="bold" color="gray" fontSize={17}>
                Beds
              </Typography>
            </Grid> */}
          </Grid>
        </Box>
      </ScrollReveal>
    </>
  );
};

export default Accomplishments;
