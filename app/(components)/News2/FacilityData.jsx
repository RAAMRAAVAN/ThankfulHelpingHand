"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectFacilities } from "@/redux/features/facilitiesSlice";
import Loader from "../Loader";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import ReadMoreText from "./ReadMoreText";
import { selectNewses } from "@/redux/features/newsSlice";
import ImageSlider from "../ImageSlider";
import ScrollReveal from "../Animation/ScrollReveal";

export const Activity = [
  {
    created_at: "2025-05-29 23:07:01",
    date: "",
    details: "<p>Our NGO organized a cloth and food donation drive to support underprivileged families. Through this initiative, we provided essential items to help bring warmth, nourishment, and hope to those in need.</p>",
    id: 1,
    indexx: 13,
    name: "Helped in treatment of a Cancer Patient at State Cancer Institute",
    photos: [
      { photo_path: "ACTIVITIES/SCI/1.png" },
      { photo_path: "ACTIVITIES/SCI/2.png" },
      { photo_path: "ACTIVITIES/SCI/3.png" },
      { photo_path: "ACTIVITIES/SCI/4.png" },
      { photo_path: "ACTIVITIES/SCI/5.png" },
    ],
  },
  {
    created_at: "2025-05-29 23:07:01",
    date: "",
    details: "<p>Our NGO organized a cloth and food donation drive to support underprivileged families. Through this initiative, we provided essential items to help bring warmth, nourishment, and hope to those in need.</p>",
    id: 1,
    indexx: 13,
    name: "Cloth & Food Donation",
    photos: [
      { photo_path: "ACTIVITIES/Donation/1.jpeg" },
      { photo_path: "ACTIVITIES/Donation/2.png" },
      { photo_path: "ACTIVITIES/Donation/3.png" },
    ],
  },
  {
    created_at: "2025-05-29 23:07:01",
    date: "",
    details: "<p>Our NGO provided medical care for a young child suffering from an ankle injury. With timely treatment and care, the child is now recovering well and regaining mobility.</p>",
    id: 2,
    indexx: 13,
    name: "Treatment of Child's Ankle",
    photos: [
      { photo_path: "ACTIVITIES/ankle/1.png" },
      { photo_path: "ACTIVITIES/ankle/2.jpeg" },
      // { photo_path: "ACTIVITIES/NALBARI/3.jpeg" },
    ],
  },
  {
    created_at: "2025-05-29 23:07:01",
    date: "",
    details: "<p>Our NGO extended medical support to a cancer patient in need.With proper treatment and compassionate care, we aimed to bring comfort, strength, and hope during their recovery journey.</p>",
    id: 3,
    indexx: 13,
    name: "Treatment of Cancer Patient",
    photos: [
      { photo_path: "ACTIVITIES/TreatmentCancer/1.png" },
      { photo_path: "ACTIVITIES/TreatmentCancer/2.png" },
      { photo_path: "ACTIVITIES/TreatmentCancer/3.png" },
      { photo_path: "ACTIVITIES/TreatmentCancer/4.png" },
      // { photo_path: "ACTIVITIES/NALBARI/3.jpeg" },
    ],
  },
  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-10-19",
    details: "<p>.</p>",
    id: 4,
    indexx: 13,
    name: "Nalbari District Program",
    photos: [
      { photo_path: "ACTIVITIES/NALBARI/1.jpeg" },
      { photo_path: "ACTIVITIES/NALBARI/2.jpeg" },
      { photo_path: "ACTIVITIES/NALBARI/3.jpeg" },
    ],
  },
  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 5,
    indexx: 1,
    name: "BAKSHA",
    photos: [
      { photo_path: "ACTIVITIES/BAKSHA/1.jpeg" },
      { photo_path: "ACTIVITIES/BAKSHA/2.jpeg" },
      { photo_path: "ACTIVITIES/BAKSHA/3.jpeg" },
      { photo_path: "ACTIVITIES/BAKSHA/4.jpeg" },
      { photo_path: "ACTIVITIES/BAKSHA/5.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 6,
    indexx: 2,
    name: "BARPETA",
    photos: [
      { photo_path: "ACTIVITIES/BARPETA/1.jpeg" },
      { photo_path: "ACTIVITIES/BARPETA/2.jpeg" },
      { photo_path: "ACTIVITIES/BARPETA/3.jpeg" },
      { photo_path: "ACTIVITIES/BARPETA/4.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 7,
    indexx: 3,
    name: "NAGAON",
    photos: [
      { photo_path: "ACTIVITIES/NAGAON/1.jpeg" },
      { photo_path: "ACTIVITIES/NAGAON/2.jpeg" },
      { photo_path: "ACTIVITIES/NAGAON/3.jpeg" },
      { photo_path: "ACTIVITIES/NAGAON/4.jpeg" },
      { photo_path: "ACTIVITIES/NAGAON/5.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 8,
    indexx: 4,
    name: "SONITPUR",
    photos: [
      { photo_path: "ACTIVITIES/SONITPUR/1.jpeg" },
      { photo_path: "ACTIVITIES/SONITPUR/2.jpeg" },
      { photo_path: "ACTIVITIES/SONITPUR/3.jpeg" },
      { photo_path: "ACTIVITIES/SONITPUR/4.jpeg" },
      { photo_path: "ACTIVITIES/SONITPUR/5.jpeg" },
      { photo_path: "ACTIVITIES/SONITPUR/6.jpeg" },
      { photo_path: "ACTIVITIES/SONITPUR/7.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 9,
    indexx: 5,
    name: "1",
    photos: [
      { photo_path: "ACTIVITIES/1/1.jpeg" },
      { photo_path: "ACTIVITIES/1/2.jpeg" },
      { photo_path: "ACTIVITIES/1/3.jpeg" },
      { photo_path: "ACTIVITIES/1/4.jpeg" },
      { photo_path: "ACTIVITIES/1/5.jpeg" },
      { photo_path: "ACTIVITIES/1/6.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 10,
    indexx: 6,
    name: "2",
    photos: [
      { photo_path: "ACTIVITIES/2/1.jpeg" },
      { photo_path: "ACTIVITIES/2/2.jpeg" },
      { photo_path: "ACTIVITIES/2/3.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 11,
    indexx: 7,
    name: "3",
    photos: [
      { photo_path: "ACTIVITIES/3/1.jpeg" },
      { photo_path: "ACTIVITIES/3/2.jpeg" },
      { photo_path: "ACTIVITIES/3/3.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 12,
    indexx: 8,
    name: "4",
    photos: [
      { photo_path: "ACTIVITIES/4/1.jpeg" },
      { photo_path: "ACTIVITIES/4/2.jpeg" },
      { photo_path: "ACTIVITIES/4/3.jpeg" },
      { photo_path: "ACTIVITIES/4/4.jpeg" },
      { photo_path: "ACTIVITIES/4/5.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 13,
    indexx: 9,
    name: "5",
    photos: [
      { photo_path: "ACTIVITIES/5/1.jpeg" },
      { photo_path: "ACTIVITIES/5/2.jpeg" },
      { photo_path: "ACTIVITIES/5/3.jpeg" },
      { photo_path: "ACTIVITIES/5/4.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 14,
    indexx: 10,
    name: "6",
    photos: [
      { photo_path: "ACTIVITIES/6/1.jpeg" },
      { photo_path: "ACTIVITIES/6/2.jpeg" },
      { photo_path: "ACTIVITIES/6/3.jpeg" },
      { photo_path: "ACTIVITIES/6/4.jpeg" },
      { photo_path: "ACTIVITIES/6/5.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 15,
    indexx: 11,
    name: "7",
    photos: [
      { photo_path: "ACTIVITIES/7/1.jpeg" },
      { photo_path: "ACTIVITIES/7/2.jpeg" },
      { photo_path: "ACTIVITIES/7/3.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 16,
    indexx: 12,
    name: "8",
    photos: [
      { photo_path: "ACTIVITIES/8/1.jpeg" },
      { photo_path: "ACTIVITIES/8/2.jpeg" },
      { photo_path: "ACTIVITIES/8/3.jpeg" },
      { photo_path: "ACTIVITIES/8/4.jpeg" },
      { photo_path: "ACTIVITIES/8/5.jpeg" },
      { photo_path: "ACTIVITIES/8/6.jpeg" },
    ],
  },

  {
    created_at: "2025-05-29 23:07:01",
    date: "2025-01-01",
    details: "<p>.</p>",
    id: 17,
    indexx: 13,
    name: "9",
    photos: [
      { photo_path: "ACTIVITIES/10/1.jpeg" },
      { photo_path: "ACTIVITIES/10/2.jpeg" },
      { photo_path: "ACTIVITIES/10/3.jpeg" },
      { photo_path: "ACTIVITIES/10/4.jpeg" },
      { photo_path: "ACTIVITIES/10/5.jpeg" },
      { photo_path: "ACTIVITIES/10/6.jpeg" },
      { photo_path: "ACTIVITIES/10/7.jpeg" },
    ],
  },
];

function formatDateToReadable(dateStr) {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Helper to get ordinal suffix (st, nd, rd, th)
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const dayWithSuffix = day.toString().padStart(2, "0") + getOrdinal(day);
  return `${dayWithSuffix} ${month} ${year}`;
}

const Facilities = ({ expand, FID }) => {
  const facilities = useSelector(selectFacilities);
  const News = useSelector(selectNewses);
  console.log("NEWS=", News);

  const isMd = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, []);

  if (News.length === 0) {
    return <Loader />;
  }

  return (
    <Box
      paddingY={2}
      marginX={2}
      display="flex"
      width="100%"
      flexDirection="column"
    >
      {Activity.map((news, index) => (
        <ScrollReveal animation="grow" timeout={1000}>
          <Box
            key={news.id}
            id={news.id}
            marginBottom={2}
            display="flex"
            flexDirection="column"
            width="100%"
            className="facility-box"
            sx={{
              height: {
                borderRadius: "15px",
                cursor: "pointer",
              },
            }}
          >
            {index === 0 ? (
              <></>
            ) : (
              <Box
                style={{ display: "flex", justifyContent: "center" }}
                marginY={3}
              >
                <hr
                  style={{
                    border: "1px solid lightgray",
                    display: "flex",
                    width: "95%",
                  }}
                />
              </Box>
            )}
            <Box
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
              textAlign="justify"
            >
              <Box
                sx={{
                  width: { sm: "100%", md: "40%" },
                  height: "280px",
                  float: { sm: "none", md: "left" },
                  top: "0",
                  marginLeft: { sm: 0, md: "10px" },
                  paddingX: { xs: 1, md: 2 },
                  position: "relative",
                }}
                // border='1px black solid'
              >
                <ImageSlider id={news.id} Images={news.photos} />
              </Box>
              <Box sx={{ marginX: 2, marginY: 1 }}>
                <Typography
                  variant="h5"
                  id={`facility-title-${news.id}`}
                  sx={{
                    fontSize: { xs: "18px", md: "24px" },
                    fontWeight: "bold",
                  }}
                >
                  {news.name}
                </Typography>
                {/* <Typography
                  variant="subtitle1"
                  marginY={1}
                  color="gray"
                  fontSize={18}
                >
                  {formatDateToReadable(news.date)}
                </Typography> */}
                {FID === news.id ? (
                  <>
                    <Box display="none"></Box>
                    <ReadMoreText
                      ShortText={news.details}
                      LongText={news.details}
                      Expand={true}
                      ReadMoreOption={false}
                      showReadmore={false}
                      scrollBack={`facility-title-${news.id}`}
                    />
                  </>
                ) : (
                  <>
                    <ReadMoreText
                      ShortText={news.details}
                      LongText={news.details}
                      Expand={false}
                      ReadMoreOption={false}
                      showReadmore={false}
                      scrollBack={`facility-title-${news.id}`}
                    />
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </ScrollReveal>
      ))}
    </Box>
  );
};

export default Facilities;
