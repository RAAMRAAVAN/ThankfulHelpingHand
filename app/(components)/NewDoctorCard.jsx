import React, { useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  Grid,
  LinearProgress,
  Tab,
  Avatar,
  IconButton,
} from "@mui/material";
import { TaskAlt, FiberManualRecord, ShareOutlined } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Link from "next/link";
import { Font, HomeDoctorList } from "./Global";
import DINCModal from "../(components)/DoctorCard/DINCModal";
import {
  selectDoctorById,
  selectDoctorsAvailability,
  setDoctorID,
} from "@/redux/features/doctorSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import ScrollReveal from "./Animation/ScrollReveal";
import ShareButton from "./ShareMenue";

// Preload Images
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = reject;
  });
};

const NewDoctorCard = ({
  id,
  image,
  name,
  speciality,
  designation,
  department,
  qualifications,
}) => {
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState("1");
  const [open, setOpen] = useState(false);
  const [preloadedImage, setPreloadedImage] = useState(null);

  const doctorDetails = useSelector(selectDoctorById());
  const DoctorsAvailability = useSelector(selectDoctorsAvailability);

  const handleChange = useCallback((_, newValue) => {
    setTabValue(newValue);
  }, []);

  // Preload Image when component mounts
  useEffect(() => {
    const imageUrl = image
      ? {image}
      : "/doctor_image.webp";
    preloadImage(imageUrl)
      .then((src) => setPreloadedImage(src))
      .catch(() => console.error("Image preload failed"));
  }, [image]);

  if (!DoctorsAvailability) return <Loader />;

  return (
    <>
      {/* <DINCModal open={open} handleClose={() => setOpen(false)} doctorDetails={doctorDetails} /> */}
      <ScrollReveal animation="grow" timeout={1000}>
        <Card
          key={id}
          sx={{
            width: "100%",
            maxWidth: 500,
            mx: "auto",
            height: 400,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            p: 2,
            overflow: "hidden",
            backgroundColor: "#ffffff",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box display="flex" flexDirection="column" width="100%">
            <Box display="flex" width="100%" justifyContent="center" marginY={5}>
              <Box
                display="flex"
                width="200px"
                height="200px"
                overflow="hidden"
                borderRadius="50%"
                padding="1px"
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)", // Slight zoom
                  },
                }}
              >
                <Avatar
                  src={image}
                  alt={name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
                    objectFit: "cover",
                    cursor: "pointer",
                    border: "5px lightgray solid",
                  }}
                />
              </Box>

            </Box>
            <div style={{ padding: "10px 0"}}>
              <hr style={{ border: "1px solid lightgray" }} />
            </div>
          </Box>

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              padding: 0,
              margin: 0,
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box display="flex" width="100%" flexDirection="column">
              <Box display="flex">
                <Typography
                  fontWeight="bold"
                  variant="h6"
                  fontSize={16}
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {name}
                </Typography>
                {/* <ShareButton id={id}/> */}
              </Box>
              <Typography color="gray" noWrap fontSize={16}>
                {designation || "Designation"}
              </Typography>
              <Box display="flex" width="100%">
                <Typography noWrap fontSize={16}>
                  {department || ""}
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions
            sx={{
              position: "absolute",
              bottom: "-25px",
              // left: "70%",
              // transform: "translateX(-50%)",
              width: "80%",
              // border:'1px black solid',
              display: "none",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              aria-label="meet"
              sx={{
                backgroundColor: HomeDoctorList,
                height: "40px",
                borderRadius: "20px",
                paddingX: "20px",
                fontWeight: "bold",
                textTransform: "none",
              }}
              onClick={() => {
                dispatch(setDoctorID(id));
                setOpen(true);
              }}
            >
              Meet the Doctor
            </Button>
          </CardActions>
        </Card>
      </ScrollReveal>
    </>
  );
};

export default NewDoctorCard;
