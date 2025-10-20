'use client'
import { FetchPartners2 } from "@/lib/fetchData";
import { Box, Grid } from "@mui/material";
import { color1 } from "../Global";
import ScrollReveal from "../Animation/ScrollReveal";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Image from "next/image";

const Partners = () => {
  const [Partners, setPartners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 5; // show 5 logos per slide
  const slideInterval = 3000; // 3 seconds

  const fetchPartners = async () => {
    try {
      const data = await FetchPartners2();
      setPartners(data);
    } catch (error) {
      console.error("Error fetching partners:", error);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  useEffect(() => {
    if (Partners.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + itemsPerSlide) % Partners.length
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [Partners]);

  if (Partners.length === 0) return <Loader />;

  // Select current 5 items, wrapping around
  const visiblePartners = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    visiblePartners.push(Partners[(currentIndex + i) % Partners.length]);
  }

  return (
    <Box width="100%" overflow="hidden" paddingY={2}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {visiblePartners.map((partner) => (
          <Grid
            key={partner.id}
            item
            lg={2.2}
            md={2.4}
            sm={3}
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ScrollReveal animation="slide">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="white"
                paddingY={1}
                border={`1px solid ${color1}`}
                width="100%"
                onClick={() => window.open(partner.link, "_blank")}
                sx={{
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box position="relative" width="100%" height="100px">
                  <Image
                    src={`https://accf-api.cancercareinstituteguwahati.org/storage/${partner.photo}`}
                    alt="partner logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Partners;
