"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Loader from "../Loader";
import Image from "next/image";

const ImageSlider = ({ Images = [] }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        position: "relative",
        "& .swiper-button-prev, & .swiper-button-next": {
          color: "#fff",
          zIndex: 10,
          display: isMdUp ? "block" : "none",
        },
        "& .swiper-pagination": { bottom: "20px" },
        "& .swiper-pagination-bullet": {
          backgroundColor: "#fff",
          opacity: 0.7,
          borderRadius: 0,
          width: "19px",
          height: "5px",
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "#1976d2",
          opacity: 1,
        },
      }}
    >
      {Images.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          pagination={{ clickable: true }}
          navigation={isMdUp}
          style={{ width: "100%", height: "100%" }}
        >
          {Images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "20vh", sm: "60vh", md: "80vh" }, // ✅ height set here
                }}
              >
                <Image
                  src={image.photo || "/fallback.jpg"}
                  alt={`slide-${index}`}
                  fill
                  priority={index === 0}
                  style={{
                    objectFit: "contain", // makes it look good on all screens
                    transition: "transform 1.5s ease-in-out",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box
          display="flex"
          width="100%"
          height={400}
          justifyContent="center"
          alignItems="center"
        >
          <Loader />
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;
