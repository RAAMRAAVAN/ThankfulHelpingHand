"use client";
import { useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  Favorite,
  FiberManualRecord,
  KeyboardArrowUp,
  Restore,
} from "@mui/icons-material";
import Navbar from "../Navbar/Navbar";
// import SocialIcons from "../SocialIcons";
import { color1, MedantaOrange } from "../Global";
import Loader from "../Loader";
import { color } from "../Global";
import { removeBackslashes, VideosAccess } from "@/lib/fetchData";
import { useSelector } from "react-redux";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import Image from "next/image";
import BottomNavigationComponent from "./BottomNavigationComponent";

const NGODetails = {
  name: "THANKFUL HELPING HAND FOUNDATION",
  aname: "Giving is the greatest act of the worship",
  phno: "7378587253",
};
const Header = () => {
  const HospitalDetails = useSelector(selectHospitalDetails);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [viewTaxBenifit, setViewTaxBenifit] = useState(false);
  const [openQR, setOpenQR] = useState(false);

  const handleQROpen = () => setOpenQR(true);
  const handleQRClose = () => setOpenQR(false);

  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  // console.log("logo=", `https://accf-api.cancercareinstituteguwahati.org/storage/${removeBackslashes(HospitalDetails.logo_primary)}`)
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000); // 10 seconds

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, []);

  if (!hydrated) return null;
  if (!HospitalDetails) return <Loader />;

  return (
    <>
      {/* Header Top Section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          backgroundColor: "#ffffff",
          position: "relative",
          top: 0,
          zIndex: 1000,
          // marginTop:'5px',
          px: { xs: 2, md: 4 },
          justifyContent: "center",
          color: "black",
          // border:"1px black solid",
          marginBottom: { xs: "0px", md: "0px" },
        }}
        // mb={2}
      >
        <Dialog open={openQR} onClose={handleQRClose} maxWidth="sm" fullWidth>
          {viewTaxBenifit ? (
            <>
              <Box display="flex" flexDirection="column" height="90vh">
                <Box display="flex" flexDirection="column" padding={2}>
                  <Typography
                    textAlign="center"
                    fontWeight="bold"
                    color="gray"
                    marginY={2}
                  >
                    Tax Benefits of Donating to Our NGO
                  </Typography>
                  <Box display="flex">
                    <FiberManualRecord
                      sx={{
                        fontSize: 10, // Adjust for larger/smaller bullet
                        // color: bulletColor,
                        mt: "13px",
                        mr: 1.2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography fontSize={14} marginY={1}>
                      All donations made to Thankful Helping Hand are eligible
                      for tax deduction under Section 80G of the Income Tax Act,
                      1961.
                    </Typography>
                  </Box>

                  <Box display="flex">
                    <FiberManualRecord
                      sx={{
                        fontSize: 10, // Adjust for larger/smaller bullet
                        // color: bulletColor,
                        mt: "13px",
                        mr: 1.2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography fontSize={14} marginY={1}>
                      You can claim 50% of your donation amount as a deduction
                      from your taxable income while filing your income tax
                      return.
                    </Typography>
                  </Box>

                  <Box display="flex">
                    <FiberManualRecord
                      sx={{
                        fontSize: 10, // Adjust for larger/smaller bullet
                        // color: bulletColor,
                        mt: "13px",
                        mr: 1.2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography fontSize={14} marginY={1}>
                      To avail of tax benefits, donations must be made through
                      traceable modes such as UPI.
                    </Typography>
                  </Box>

                  <Box display="flex">
                    <FiberManualRecord
                      sx={{
                        fontSize: 10, // Adjust for larger/smaller bullet
                        // color: bulletColor,
                        mt: "13px",
                        mr: 1.2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography fontSize={14} marginY={1}>
                      You can claim deductions up to 10% of your gross total
                      income in a financial year under Section 80G.
                    </Typography>
                  </Box>

                  <Box display="flex">
                    <FiberManualRecord
                      sx={{
                        fontSize: 10, // Adjust for larger/smaller bullet
                        // color: bulletColor,
                        mt: "13px",
                        mr: 1.2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography fontSize={14} marginY={1}>
                      You can verify our NGO’s 80G registration on the official
                      Income Tax Department portal.
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  sx={{ borderRadius: 0, position: "absolute", bottom: 0 }}
                  fullWidth
                  onClick={() => setViewTaxBenifit(!viewTaxBenifit)}
                >
                  Donate Now
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box display="flex" flexDirection="column" height="90vh">
                <Image
                  src={`QR.jpeg`}
                  alt="QR"
                  width={100}
                  height={100}
                  priority
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "80vh",
                    cursor: "pointer",
                  }}
                  // onClick={() => (window.location.href = "/")}
                />
                <Button
                  variant="contained"
                  sx={{ borderRadius: 0, position: "absolute", bottom: 0 }}
                  fullWidth
                  onClick={() => setViewTaxBenifit(!viewTaxBenifit)}
                >
                  View Tax Benifits
                </Button>
              </Box>
            </>
          )}
        </Dialog>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          width="100%"
        >
          {/* Logo & Hospital Name */}

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "center" },
              gap: 2,
              // position: 'relative'
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {/* {HospitalDetails.logo_primary == null ? <></> : */}
              <Image
                src={`logo.jpg`}
                alt="ACCF Logo"
                width={100}
                height={100}
                priority
                style={{
                  objectFit: "contain",
                  width: "100px",
                  height: "100px",
                  cursor: "pointer",
                }}
                onClick={() => (window.location.href = "/")}
              />
              {/* } */}
            </Box>
            <Box
              textAlign={{ xs: "center", md: "left" }}
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {NGODetails.aname}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#bf1e2e",
                  fontWeight: "bold",
                  fontSize: { xs: "24px", sm: "18px", md: "20px" },
                }}
              >
                {NGODetails.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#bf1e2e", fontSize: { xs: "12px", sm: "14px" } }}
              >
                Non Governmental Charitable Organisation
              </Typography>
            </Box>
            {/* <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}>
                            {HospitalDetails.logo_secondary == null ? <></> :
                                <Image
                                    src={`https://accf-api.cancercareinstituteguwahati.org/storage/${removeBackslashes(HospitalDetails.logo_secondary)}`}
                                    alt="ACCF Logo"
                                    width={100}
                                    height={100}
                                    priority
                                    style={{ objectFit: "contain", width: '100px', height: '100px', cursor: 'pointer' }}
                                    onClick={() => window.location.href = '/'}
                                />}
                        </Box> */}
          </Grid>

          {/* Contact Info and Social Icons */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              textAlign: { xs: "center", md: "right" },
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
            }}
          >
            {/* <Typography
                            variant="h6"
                            component="a"
                            href={`tel:${NGODetails.phno}`}
                            sx={{
                                fontWeight: 800,
                                color: color1,
                                fontSize: { xs: "14px", sm: "16px", md: "14px" },
                                textDecoration: "none",
                                cursor: "pointer",
                            }}
                        >
                            FOR QUERY & APPOINTMENT, CALL {NGODetails.phno}
                        </Typography> */}
            <Box>
              <Button
                variant="contained"
                onClick={handleQROpen}
                sx={{ backgroundColor: MedantaOrange, borderRadius: "20px" }}
              >
                Donate Now
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: { xs: "center", md: "flex-end" },
                mt: 1,
              }}
            >
              {/* <SocialIcons /> */}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Typography
        textAlign="center"
        sx={{
          display: {
            md: "none",
            lg: "none",
            sm: "flex",
            xs: "flex",
            xl: "none",
          },
          justifyContent: "center",
        }}
        marginTop={1}
        color="#bf1e2e"
        fontWeight="bold"
      >
        {NGODetails.name}
      </Typography>

      {/* Sticky Navbar */}
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: 5,
          paddingTop: { xs: 1, md: 0 },
          backgroundColor: "white",
          // boxShadow:3
          // border:'1px black solid'
        }}
      >
        <Navbar
          Title={HospitalDetails?.name}
          setMobileOpen={setMobileOpen}
          mobileOpen={mobileOpen}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
          }}
        >
          <hr style={{ borderTop: "1px solid lightgray", width: "100%" }} />
        </Box>
      </Box>
      {/* {VideosAccess?<Box display="flex" width="100%" justifyContent="center">
                <LatestEvent open={open} handleClose={() => setOpen(false)} setOpen={setOpen}/>
            </Box>:<></>} */}

      {/* Scroll to Top FAB */}
      <Fab
        aria-label="scroll-top"
        sx={{
          position: "fixed",
          bottom: 66,
          right: 16,
          zIndex: 1000,
          backgroundColor: color,
          color: "#fff",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
        onClick={handleScrollToTop}
      >
        <KeyboardArrowUp />
      </Fab>
      <BottomNavigationComponent
        setMobileOpen={setMobileOpen}
        mobileOpen={mobileOpen}
      />
    </>
  );
};

export default Header;
