"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Restore,
  Favorite,
  Dehaze,
  FiberManualRecord,
  Close,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaStethoscope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { useRouter } from "next/navigation";
import { RiContactsLine } from "react-icons/ri";
import { MedantaOrange } from "../Global";
import { useState } from "react";
import Image from "next/image"; // ✅ ADD THIS IMPORT

const BottomNavigationComponent = ({ setMobileOpen, mobileOpen }) => {
  const theme = useTheme();
  const isSmOrXs = useMediaQuery(theme.breakpoints.down("sm"));
  const [viewTaxBenifit, setViewTaxBenifit] = useState(false);
  const router = useRouter();
  const [openQR, setOpenQR] = useState(false);

  const upiLink = "upi://pay?pa=7378587253@okbizaxis&pn=Thankful%20Helping%20Hand&tn=Donation&cu=INR";
  const handleQROpen = () => setOpenQR(true);
  const handleQRClose = () => setOpenQR(false);

  return (
    isSmOrXs && (
      <BottomNavigation
        showLabels
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 1300,
          display: { xs: "flex", sm: "flex", md: "none" },
        }}
      >
        <Dialog open={openQR} onClose={handleQRClose} maxWidth="sm" fullWidth>
          {/* Close Button */}
          <IconButton
            onClick={handleQRClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "grey.600",
              zIndex: 2,
            }}
          >
            <Close />
          </IconButton>
          {viewTaxBenifit ? (
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

                {[
                  "All donations made to Thankful Helping Hand are eligible for tax deduction under Section 80G of the Income Tax Act, 1961.",
                  "You can claim 50% of your donation amount as a deduction from your taxable income while filing your income tax return.",
                  "To avail of tax benefits, donations must be made through traceable modes such as UPI.",
                  "You can claim deductions up to 10% of your gross total income in a financial year under Section 80G.",
                  "You can verify our NGO’s 80G registration on the official Income Tax Department portal.",
                ].map((text, index) => (
                  <Box key={index} display="flex">
                    <FiberManualRecord
                      sx={{
                        fontSize: 10,
                        mt: "13px",
                        mr: 1.2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography fontSize={14} marginY={1}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                sx={{ borderRadius: 0, position: "absolute", bottom: 0 }}
                fullWidth
                onClick={() => setViewTaxBenifit(false)}
              >
                Donate Now
              </Button>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" height="90vh">
              <a href={upiLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="/QR.jpeg"
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
              />
              </a>
              <Button
                variant="contained"
                sx={{ borderRadius: 0, position: "absolute", bottom: 0 }}
                fullWidth
                onClick={() => setViewTaxBenifit(true)}
              >
                View Tax Benefits
              </Button>
            </Box>
          )}
        </Dialog>

        <BottomNavigationAction
          onClick={() => setMobileOpen(!mobileOpen)}
          icon={<Dehaze />}
        />

        <BottomNavigationAction
          label="Donate Now"
          onClick={handleQROpen}
          sx={{
            backgroundColor: MedantaOrange,
            color: "white",
            borderRadius: "30px",
            marginY: "5px",
          }}
        />

        <BottomNavigationAction
          label="Contact Us"
          onClick={() => router.push("/contact")}
          icon={<RiContactsLine size={24} color="gray" />}
        />
      </BottomNavigation>
    )
  );
};

export default BottomNavigationComponent;
