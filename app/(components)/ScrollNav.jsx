"use client";

import { Box, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import { Link as ScrollLink, Element } from "react-scroll";
import { color1, color4, MedantaOrange } from "./Global";
import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Loader from "./Loader";
import DoctorSlider from "./DoctorCard/DoctorSlider";
import ScrollReveal from "./Animation/ScrollReveal";
import Partners from "./Partners/Partners";
import WhatsHappening from "./WhatsHappening";
import VideoGrid from "./Videos/VideoGrid";
import { LatestVideos2 } from "@/lib/fetchData";
import SearchDoctors from "./DoctorCard/SearchDoctors";
import { selectDoctors } from "@/redux/features/doctorSlice";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import TowardsAchieving from "./TowardsAchieving";

const AccomplishmentsMain = lazy(() =>
  import("./Accomplishments/AccomplichmentsMain")
);
const Facilities = lazy(() => import("./Facilities/FacilityData"));
const Facility2 = lazy(() => import("./Facilities/Facility2"));
const OurHospitals = lazy(() => import("./Hospitals/OurHospitalsPage"));
const OurHospitals2 = lazy(() => import("./Hospitals/OurHospitals"));
const ImageSliderMain = lazy(() => import("./HomeImageSlider/ImageSliderMain"));

const doctors = [
  {
    id: 1,
    name: "KUNAL RATHOD",
    designtion: "Director",
    text: "",
    image: "Team/kunal.jpeg",
  },
  {
    id: 2,
    name: "HEMAN NATH",
    designtion: "Director",
    text: "",
    image: "Team/heman.jpeg",
  },
  {
    id: 3,
    name: "MAITU DEVI",
    designtion: "President (ASSAM)",
    text: "",
    image: "Team/mitu.jpeg",
  },
  {
    id: 4,
    name: "SEEMA DAS",
    designtion: "Secretary (ASSAM)",
    text: "",
    image: "Team/seema.jpeg",
  },
];

const navItems = [
  { label: "Introduction", to: "Intro" },
  { label: "Our Doctors", to: "Doctors" },
  { label: "Accomplishments", to: "Accomp" },
  { label: "Facilities2", to: "Facility" },
  { label: "Facilities", to: "Facilitie" },
  { label: "Partners", to: "Partners" },
  { label: "Featured Stories", to: "Featured" },
  { label: "Our Stories", to: "Stories" },
  { label: "ACCF Network", to: "Network" },
];

export const OurFields = [
  {
    id: 1,
    name: "Education",
    img: "FIELDS/education.png",
    link: "",
    color: "black",
  },
  { id: 2, name: "Health", img: "FIELDS/health.png", link: "", color: "black" },
  {
    id: 3,
    name: "Skill Development",
    img: "FIELDS/skill.png",
    link: "",
    color: "black",
  },
  {
    id: 4,
    name: "Environment",
    img: "FIELDS/environmental-impact.png",
    link: "",
    color: "black",
  },
  {
    id: 5,
    name: "Disability Support",
    img: "FIELDS/assistant.png",
    link: "",
    color: "black",
  },
  {
    id: 6,
    name: "Women Empowerment",
    img: "FIELDS/speech.png",
    link: "",
    color: "black",
  },
  {
    id: 7,
    name: "Clean Water",
    img: "FIELDS/earth.png",
    link: "",
    color: "black",
  },
  {
    id: 8,
    name: "Rural Development",
    img: "FIELDS/management.png",
    link: "",
    color: "black",
  },
  {
    id: 9,
    name: "Sports",
    img: "FIELDS/soccer-player.png",
    link: "",
    color: "black",
  },
  {
    id: 10,
    name: "Art & Culture",
    img: "FIELDS/mandala.png",
    link: "",
    color: "black",
  },
  {
    id: 11,
    name: "Emergency Relief",
    img: "FIELDS/front-line.png",
    link: "",
    color: "black",
  },
  // https://www.flaticon.com/
];
const ScrollNav = () => {
  const [selected, setSelected] = useState(0);
  const [LatestVideosData, setVideos] = useState([]);
  const [fetchedSections, setFetchedSections] = useState({});
  // const doctors = useSelector(selectDoctors);
  const HospitalDetails = useSelector(selectHospitalDetails);
  const sectionRefs = useRef({});
  const navRefs = useRef({});
  const isMobile = useMediaQuery("(max-width:900px)");

  // Fetch on-demand section data
  const fetchSectionData = useCallback(
    async (sectionId) => {
      if (fetchedSections[sectionId]) return;
      try {
        const res = await fetch(`/api/data/${sectionId}`);
        await res.json(); // Assuming this is used elsewhere
        setFetchedSections((prev) => ({ ...prev, [sectionId]: true }));
      } catch (err) {
        console.error("Fetch error:", err);
      }
    },
    [fetchedSections]
  );

  // Fetch videos only when user scrolls to "Stories"
  const fetchVideosIfNeeded = useCallback(() => {
    if (!LatestVideosData.length) {
      LatestVideos2().then(setVideos).catch(console.error);
    }
  }, [LatestVideosData]);

  useEffect(() => {
    fetchVideosIfNeeded();
  }, []);
  // Intersection observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = entry.target.getAttribute("data-section");
          if (entry.isIntersecting && sectionId) {
            const index = navItems.findIndex((item) => item.to === sectionId);
            setSelected(index);
            if (!fetchedSections[sectionId]) {
              fetchSectionData(sectionId);
            }
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    const id = requestIdleCallback(() => {
      Object.values(sectionRefs.current).forEach((el) => {
        if (el) observer.observe(el);
      });
    });

    return () => {
      cancelIdleCallback(id);
      observer.disconnect();
    };
  }, [fetchSectionData, fetchedSections]);

  useEffect(() => {
    if (isMobile && navRefs.current[selected]) {
      navRefs.current[selected].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selected, isMobile]);

  return (
    <>
      {/* Navigation Bar */}
      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
          position: "sticky",
          top: { sm: 56, xs: 56, md: 38 },
          zIndex: 4,
          backgroundColor: "white",
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "none",
            overflowX: "auto",
            whiteSpace: "nowrap",
            px: 4,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {navItems.map((item, index) => (
            <Box
              key={item.to}
              display="flex"
              alignItems="center"
              sx={{ flexShrink: 0 }}
              ref={(el) => (navRefs.current[index] = el)}
            >
              <ScrollLink to={item.to} smooth duration={500} offset={-80}>
                <Link
                  underline="none"
                  sx={{
                    fontSize: "12px",
                    cursor: "pointer",
                    color: selected === index ? color1 : "#B0B0B0",
                    fontWeight: "bold",
                  }}
                >
                  {item.label}
                </Link>
              </ScrollLink>
              {index < navItems.length - 1 && (
                <Typography
                  sx={{
                    mx: 1,
                    fontSize: 30,
                    color: selected === index ? color1 : "#B0B0B0",
                  }}
                >
                  •
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        boxShadow="5px 5px 15px rgba(0, 0, 0, 0.3)"
        marginBottom={3}
        sx={{ backgroundColor: "#f6f6f6", color: "black" }}
        // fontFamily='fantasy'
      >
        {/* Sections */}
        <Element name="Intro">
          <Box
            ref={(el) => (sectionRefs.current["Intro"] = el)}
            data-section="Intro"
          ></Box>
        </Element>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
          }}
        >
          <Suspense fallback={<Loader />}>
            <ImageSliderMain />
          </Suspense>
          {/* <Box px={2} sx={{ width: { xs: "100%", md: "40%" } }}>
            {/* <Box sx={{ display: { xs: 'flex', md: 'none' }, my: 2 }}>
                            <SearchDoctors doctors={doctors} />
                        </Box> 
            {HospitalDetails ? (
              <>
                <Typography
                  variant="h6"
                  marginTop={3}
                  fontWeight="bold"
                  color={MedantaOrange}
                >
                  THANKFUL HELPING HAND FOUNDATION
                </Typography>
                <Typography fontSize={14} textAlign="justify">
                  THANKFUL HELPING HAND FOUNDATION is dedicated to eradicating
                  poverty and fostering positive change across key sectors
                  including healthcare, education, women’s empowerment,
                  environment, mental health, and rural development. We support
                  initiatives such as old age homes, orphan care, widowed women
                  upliftment, and animal welfare. Through sustainable projects,
                  we aim to uplift underprivileged communities and promote
                  inclusive growth. We also focus on spiritual and moral
                  development through digital outreach, interfaith dialogue, and
                  value-based education. Our free programs — including food
                  distribution, medical aid, and counseling — promote holistic
                  well-being and harmony across all sections of society.
                </Typography>
              </>
            ) : (
              <Loader />
            )}
          </Box> */}
        </Box>
        <Box display="flex" width="100%" justifyContent="center" marginY={5}>
          <Box display="flex" maxWidth="400px">
            <Typography textAlign="center" color="orange" fontWeight="bold">
              Aum Sarve Bhavantu Sukhinah Sarve Santu Niraamayaah | Sarve
              Bhadraanni Pashyantu Maa Kasheid-Dukha-Bhaag-Bhavet Aum Shaantih
              Shaantih Shaantih ||
            </Typography>
          </Box>
        </Box>

        <Box marginY={5} display="flex" flexDirection="column">
          <Typography
            textAlign="center"
            color={MedantaOrange}
            fontWeight="bold"
            fontSize={25}
          >
            OUR FIELDS OF WORK
          </Typography>
          <Box
            display="flex"
            width="100%"
            marginY={2}
            // border="1px black solid"
            // height="250px"
          >
            <Grid container display="flex" flexDirection="row" marginX={{ xs: 0, md: 5 }}>
              {OurFields.map((field, index) => {
                return (
                  <Grid
                    item
                    lg={2}
                    md={4}
                    sm={6}
                    xs={6}
                    marginBottom={3}
                    sx={{
                      display: "flex",
                      width: "100%",
                      // height: "100%",
                      flexDirection: "column",
                      //   marginX:2,
                        // border: "1px black solid",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      // border='1px black solid'
                      alignItems='center'
                      // padding={4}
                    >
                      <Image
                        src={field.img}
                        alt="img"
                        width={100}
                        height={100}
                        style={{
                          // width: "60%",
                          // height: "60%",
                          objectFit: "cover",
                          transition: "transform 1.5s ease-in-out",
                        }}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Box>
                    <Typography
                      textAlign="center"
                      marginTop={2}
                      sx={{
                        fontFamily: "Oswald, sans-serif",
                        color: field.color,
                        fontWeight: "600",
                        textDecoration: "underline",
                      }}
                    >
                      {field.name}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>

        <TowardsAchieving />

        <Box marginTop={3}>
          <Typography
            variant="h5"
            fontWeight="bold"
            // onClick={() => dispatch(setPage(1))}
            sx={{ cursor: "pointer", textAlign:'center', color: MedantaOrange}}
          >
            Our Team
          </Typography>
        </Box>
        <Element name="Doctors">
          <Box
            ref={(el) => (sectionRefs.current["Doctors"] = el)}
            data-section="Doctors"
            mx={1}
            display="flex"
            flexDirection="column"
          >
            <Suspense fallback={<Loader />}>
              <DoctorSlider doctors={doctors} />
            </Suspense>
          </Box>
        </Element>

        <Element name="Accomp">
          <Box
            ref={(el) => (sectionRefs.current["Accomp"] = el)}
            data-section="Accomp"
            marginTop="100px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5" fontWeight="bolder">
              OUR IMPACT
            </Typography>
          </Box>
        </Element>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Suspense fallback={<Loader />}>
            <AccomplishmentsMain />
          </Suspense>
        </Box>

        {/* experimental facilities */}

        {/* <Element name="Facility">
          <Box
            ref={(el) => (sectionRefs.current["Facility"] = el)}
            data-section="Facility"
            marginTop={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box width="90%">
              <Typography variant="h5" fontWeight="bold" my={2}>
                Facilities
              </Typography>
            </Box>
          </Box>
        </Element> */}

        {/* <Box
          marginBottom={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box width="90%">
            <Facility2 />
          </Box>
        </Box> */}

        {/* experimental facilities 2 */}

        {/* <Element name="Facilitie">
                    <Box ref={el => sectionRefs.current['Facilitie'] = el} data-section="Facilitie" marginTop={5} display="flex" flexDirection="column" alignItems="center">
                        <Box width="90%">
                            <Typography variant="h5" fontWeight="bold" my={2}>Facilities</Typography>
                        </Box>
                    </Box>
                </Element>


                <Box marginBottom={5} display="flex" flexDirection="column" alignItems="center">
                    <Box width="90%">
                        <Facilities />
                    </Box>
                </Box> */}

        {/* <Element name="Partners">
          <Box
            mt={5}
            display="flex"
            justifyContent="center"
            ref={(el) => (sectionRefs.current["Partners"] = el)}
            data-section="Partners"
          >
            <Box width="90%">
              <ScrollReveal animation="grow">
                <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center" color={MedantaOrange}>
                  CORPORATE PARTNERSHIP
                </Typography>
              </ScrollReveal>
            </Box>
          </Box>
        </Element>
        <Box display="flex" justifyContent="center">
          <Box width="90%">
            <Suspense fallback={<Loader />}>
              <Partners />
            </Suspense>
          </Box>
        </Box> */}

        <Element name="Featured">
          <Box
            ref={(el) => (sectionRefs.current["Featured"] = el)}
            data-section="Featured"
          ></Box>
        </Element>
        <Suspense fallback={<Loader />}>
          <WhatsHappening />
        </Suspense>

        <Element name="Stories">
          <Box
            ref={(el) => (sectionRefs.current["Stories"] = el)}
            data-section="Stories"
          >
            {LatestVideosData.length > 0 && (
              <Box mt={5} display="flex" justifyContent="center">
                <Box width="90%">
                  <Typography variant="h5" fontWeight="bold" mb={3}>
                    Our Stories
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Element>
        <Box display="flex" justifyContent="center">
          <Box width="90%">
            <Suspense fallback={<Loader />}>
              <VideoGrid LatestVideosData={LatestVideosData} />
            </Suspense>
          </Box>
        </Box>

        {/* <Element name="Network">
                    <Box ref={el => sectionRefs.current['Network'] = el} data-section="Network" mt={5} display="flex" justifyContent="center">
                        <Box width="90%">
                            <Typography variant="h5" fontWeight="bold" mb={3}>ACCF Network</Typography>

                        </Box>
                    </Box>
                </Element>
                <Box display="flex" justifyContent="center">
                    <Box width="90%">
                        <Suspense fallback={<Loader />}><OurHospitals /></Suspense>
                    </Box>
                </Box> */}

        {/* <Element name="Network">
          <Box
            ref={(el) => (sectionRefs.current["Network"] = el)}
            data-section="Network"
            mt={5}
            display="flex"
            justifyContent="center"
          >
            <Box width="90%">
              <Typography variant="h5" fontWeight="bold" mb={3}>
                ACCF Network
              </Typography>
              <Typography
                variant="body1"
                mb={3}
                sx={{
                  fontFamily: "Montserrat,Roboto,Helvetica,Arial,sans-serif",
                }}
              >
                Learn more about ACCF Hospital locations.
              </Typography>
            </Box>
          </Box>
        </Element> */}
        {/* <Box display="flex" justifyContent="center">
          <Box width="90%">
            <Suspense fallback={<Loader />}>
              <OurHospitals2 />
            </Suspense>
          </Box>
        </Box> */}
      </Box>
    </>
  );
};

export default ScrollNav;
