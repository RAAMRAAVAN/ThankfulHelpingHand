"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { OurFields } from "../../(components)/ScrollNav";
import { MedantaOrange } from "../../(components)/Global";
import TowardsAchieving from "../../(components)/TowardsAchieving";
const page = () => {
  return (
    <>
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
          <Grid
            container
            display="flex"
            flexDirection="row"
            marginX={{ xs: 0, md: 5 }}
          >
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
                    alignItems="center"
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
    </>
  );
};
export default page;
