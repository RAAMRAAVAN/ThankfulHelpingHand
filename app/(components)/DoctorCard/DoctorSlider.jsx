"use client";

import {
  Box,
  IconButton,
  Grid,
  useMediaQuery,
  Typography,
  TextField,
} from "@mui/material";
import { useState, useMemo } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";
import NewDoctorCard from "../../(components)/NewDoctorCard";
import { color1 } from "../Global";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setPage } from "@/redux/features/doctorSlice";
import Loader from "../Loader";
import { AnimatePresence, motion } from "framer-motion";

const DoctorSlider = ({ doctors }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const [direction, setDirection] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // --- Media Queries ---
  const isXs = useMediaQuery("(max-width:600px)");
  const isSm = useMediaQuery("(min-width:601px) and (max-width:960px)");
  const isMd = useMediaQuery("(min-width:961px) and (max-width:1200px)");

  // --- Doctors per page ---
  const doctorsPerPage = isXs ? 1 : isSm ? 2 : isMd ? 2 : 3;

  // --- Filtered doctors ---
  const filteredDoctors = useMemo(
    () =>
      doctors.filter((doctor) =>
        doctor.name?.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [doctors, searchQuery]
  );

  const totalDoctors = filteredDoctors.length;
  const totalPages = Math.max(1, Math.ceil(totalDoctors / doctorsPerPage));

  // --- Show all on mobile ---
  const displayedDoctors = isXs
    ? filteredDoctors
    : filteredDoctors.slice((page - 1) * doctorsPerPage, page * doctorsPerPage);

  // --- Handlers ---
  const handleNext = () => {
    if (page < totalPages) {
      setDirection(1);
      dispatch(setPage(page + 1));
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setDirection(-1);
      dispatch(setPage(page - 1));
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <Box
        {...(isXs ? {} : handlers)} // Disable swipe for mobile
        position="relative"
        display="flex"
        width="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ touchAction: "pan-y", minHeight: "430px", overflowX: "hidden" }}
      >
        {filteredDoctors.length > 0 ? (
          <Box
            sx={{
              width: { lg: "90%", md: "90%", xs: "100%" },
              minHeight: "380px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* --- Left Arrow --- */}
            <IconButton
              onClick={handlePrev}
              disabled={page === 1}
              sx={{
                position: "absolute",
                left: "0%",
                top: "50%",
                zIndex: 1,
                fontSize: "3rem",
                color: color1,
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                display: isXs ? "none" : "flex",
              }}
            >
              <ArrowBackIosNew sx={{ fontSize: "3rem" }} />
            </IconButton>

            {/* --- Animated Page Transition --- */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isXs ? "mobile" : page} // Avoid re-render flicker on mobile
                initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid
                  container
                  spacing={5}
                  justifyContent="center"
                  sx={{ minHeight: "350px" }}
                  display="flex"
                  width="100%"
                >
                  {displayedDoctors.map((doctor) => (
                    <Grid
                      key={doctor.id}
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      display="flex"
                      justifyContent="center"
                      alignItems="stretch"
                      marginY={2}
                      position="relative"
                    >
                      <NewDoctorCard
                        id={doctor.id}
                        image={doctor.image}
                        name={doctor.name}
                        speciality={doctor.specialization}
                        designation={doctor.designtion}
                        department={doctor.depertment}
                        qualifications={doctor.qualification}
                      />
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </AnimatePresence>

            {/* --- Right Arrow --- */}
            <IconButton
              onClick={handleNext}
              disabled={page === totalPages}
              sx={{
                position: "absolute",
                right: "0%",
                top: "50%",
                fontSize: "3rem",
                color: color1,
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                display: isXs ? "none" : "flex",
              }}
            >
              <ArrowForwardIos sx={{ fontSize: "3rem" }} />
            </IconButton>
          </Box>
        ) : (
          <Loader />
        )}
      </Box>
    </>
  );
};

export default DoctorSlider;
