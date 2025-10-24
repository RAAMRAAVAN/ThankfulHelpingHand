"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  Dialog,
  IconButton,
} from "@mui/material";
import { Close, East, FiberManualRecord } from "@mui/icons-material";

import { selectNewses, setID } from "@/redux/features/newsSlice";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import ScrollReveal from "./Animation/ScrollReveal";
import { Activity } from "./News2/FacilityData";
import { MedantaOrange } from "./Global";
import Image from "next/image";

function convertToArray(str) {
  return str?.split(",")[0] || "";
}

export default function NewsLink() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [openQR, setOpenQR] = useState(false);
  const [viewTaxBenifit, setViewTaxBenifit] = useState(false);

  const handleQROpen = () => setOpenQR(true);
  const handleQRClose = () => setOpenQR(false);

  const [clicked, setClicked] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

   const upiLink = "upi://pay?pa=7378587253@okbizaxis&pn=Thankful%20Helping%20Hand&tn=Donation&cu=INR";
  return (
    <Grid
      container
      spacing={5}
      justifyContent="flex-start"
      sx={{ width: { md: "100%", sm: "100%" } }}
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
      {/* Static Card for News Overview */}
      {/* <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
        <ScrollReveal animation="grow" timeout={1000} style={{height:'100%'}}>
          <Card
            className="news-card"
            sx={{
              backgroundColor: 'rgb(232, 237, 238)',
              display: 'flex',
              width: '100%',
              height:'384px',
              position: 'relative',
            }}
          >
            <CardActionArea
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'start',
              }}
            >
              <Box display="flex" width="100%">
                <CardMedia
                  component="img"
                  sx={{ height: '175px', width: '100%' }}
                  image="/news.jpg"
                  alt="News Thumbnail"
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  onClick={() => {
                    setClicked(true);
                    setSelectedCard(0);
                    router.push(`/news`);
                  }}
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    backgroundColor: clicked && selectedCard === 0 ? '#ffeb3b' : '',
                    textDecoration: clicked && selectedCard === 0 ? 'underline' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  News and events
                </Typography>
                {/* <br/> 
                {/* <br/> 
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Find the latest news about our work and achievements
                </Typography>
              </CardContent>
              <CardActions
                onClick={() => {
                  router.push(`/news`);
                }}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  marginBottom: 2,
                  width: '100%',
                }}
              >
                <div className="news-arrow">
                  <East fontSize="large" />
                </div>
              </CardActions>
            </CardActionArea>
          </Card>
          </ScrollReveal>
      </Grid> */}

      {/* Dynamic News Cards */}
      {Activity.slice(0, 4).map((entry, index) => (
        <Grid
          key={entry.id || index}
          item
          xs={12}
          sm={6}
          md={3}
          display="flex"
          justifyContent="center"
        >
          <ScrollReveal animation="grow" timeout={1000}>
            <Card
              className="news-card"
              sx={{
                backgroundColor: "rgb(232, 237, 238)",
                display: "flex",
                width: "100%",
                height: "384px",
                position: "relative",
              }}
            >
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "start",
                }}
              >
                <Box display="flex" width="100%">
                  {/* Uncomment if needed */}
                  {entry.photos ? (
                    <CardMedia
                      component="img"
                      sx={{ height: "175px", width: "100%" }}
                      image={entry.photos[0].photo_path}
                      alt={entry.name}
                    />
                  ) : (
                    <></>
                  )}
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    onClick={() => {
                      setClicked(true);
                      setSelectedCard(entry.id);
                      dispatch(setID(entry.id));
                      router.push(`/news#${entry.id}`);
                    }}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      backgroundColor:
                        clicked && selectedCard === entry.id ? "#ffeb3b" : "",
                      textDecoration:
                        clicked && selectedCard === entry.id
                          ? "underline"
                          : "none",
                      cursor: "pointer",
                    }}
                  >
                    {entry.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: entry.details,
                    }}
                  />
                </CardContent>
                <CardActions
                  onClick={() => {
                    setClicked(true);
                    setSelectedCard(entry.id);
                    dispatch(setID(entry.id));
                    router.push(`/news#${entry.id}`);
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginBottom: 2,
                    width: "100%",
                  }}
                >
                  {/* <div className="news-arrow">
                    <East fontSize="large" />
                  </div> */}
                </CardActions>
              </CardActionArea>
              <Box
                position="absolute"
                display="flex"
                width="100%"
                bottom={10}
                justifyContent="center"
              >
                <Button
                  onClick={handleQROpen}
                  variant="contained"
                  sx={{
                    paddingX: "30px",
                    borderRadius: "20px",
                    backgroundColor: MedantaOrange,
                  }}
                >
                  Donate Now
                </Button>
              </Box>
            </Card>
          </ScrollReveal>
        </Grid>
      ))}
    </Grid>
  );
}
