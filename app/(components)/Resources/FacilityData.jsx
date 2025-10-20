"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Facilities = ({ expand, FID }) => {
  const Resources = [
    {
      id:1,
      doc_name: "Employee Hand Book",
      thumbnail: `Resources\\Employee handbook.png`,
      doclink: "Resources\\Employee handbook.pdf",
    },
    {
      id:2,
      doc_name: "FUTURE ANNUAL INCOME AND EXPENDITURE ESTIMATES",
      thumbnail: `Resources\\FUTURE ANNUAL INCOME AND EXPENDITURE ESTIMATES.png`,
      doclink: "Resources\\FUTURE ANNUAL INCOME AND EXPENDITURE ESTIMATES.pdf",
    },
    {
      id:3,
      doc_name: "MOA",
      thumbnail: `Resources\\MOA.png`,
      doclink: "Resources\\MOA.pdf",
    },
    {
      id:4,
      doc_name: "NGO Darpan Certificate",
      thumbnail: `Resources\\NGO Darpan Certificate.png`,
      doclink: "Resources\\NGO Darpan Certificate.pdf",
    },
    {
      id:5,
      doc_name: "THANKFUL HELPING HAND NGO DARPAN",
      thumbnail: `Resources\\THANKFUL HELPING HAND NGO DARPAN.png`,
      doclink: "Resources\\THANKFUL HELPING HAND NGO DARPAN.pdf",
    },
    {
      id:6,
      doc_name: "THHF12A CERTIFICATE",
      thumbnail: `Resources\\THHF12A CERTIFICATE.png`,
      doclink: "Resources\\THHF12A CERTIFICATE.pdf",
    },
    {
      id:7,
      doc_name: "THHF80G CERTIFICATE",
      thumbnail: `Resources\\THHF80G CERTIFICATE.png`,
      doclink: "Resources\\THHF80G CERTIFICATE.pdf",
    },
  ];

  const handleOpenPDF = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <Box
      paddingY={2}
      marginX={2}
      display="flex"
      width="100%"
      flexDirection="column"
    >
      <Grid container>
        {Resources.map((resource, index) => {
          return (
            <Grid item xs={3} padding={2}>
              <Box
                display="flex"
                flexDirection="column"
                padding={2}
                height='400px'
                borderRadius="10px"
                boxShadow={2}
                position="relative"
              >
                <Typography color="gray" fontWeight="bold">
                  {resource.doc_name}
                </Typography>
                <Image
                  src={resource.thumbnail}
                  alt="Image Slide"
                  width={250}
                  height={280}
                  style={{
                    width: "100%",
                    height: "280px",
                    padding: "10px",
                    objectFit: "cover",
                    transition: "transform 1.5s ease-in-out",
                    // borderRadius:'5px'
                  }}
                />
                <Button
                  variant="contained"
                  // fullWidth
                  sx={{ borderRadius: 0, backgroundColor: "orange", position:'absolute', bottom:5, width:'100%', left:0}}
                  onClick={() => handleOpenPDF(resource.doclink)}
                >
                  View Document
                </Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Facilities;
