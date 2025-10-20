"use client";
import { Box, Button, Grid, Typography } from "@mui/material";

import ScrollReveal from "@/app/(components)/Animation/ScrollReveal";
import DoctorSlider from '../../(components)/DoctorCard/DoctorSlider';

const Entries = ({doctors}) => {
  // const { entries } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      // border="1px black solid"
    >
      {/* {entries.map((entry, index) => ( */}
      <ScrollReveal animation="grow" timeout={1000}>
        <Grid
          // key={entry.id}
          container
          width="100%"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            // mb: 2,
            // border:'1px black solid', //
            borderRadius: { xs: "20px", md: "none" },
            background: {
              xs: "linear-gradient(to right, #ded5d9, #e1e5ea)",
              md: "white",
            },
            boxShadow: { xs: "3", md: "none" },
          }}
        >
          <Box
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
            textAlign="justify"
          >
            {/* <Box
              sx={{
                width: { sm: "100%", md: "40%" },
                height: "300px",
                // float: {
                //   sm: "none",
                //   md: index % 2 === 0 ? "left" : "right"
                // },
                top: "0",
                marginLeft: { sm: 0, md: "10px" },
                padding: { sm: 0, md: 3 },
              }}
            >
              {/* <Image
                src={`https://accf-api.cancercareinstituteguwahati.org/storage/${entry.photo}`}
                // src='/Doctors'
                alt="img"
                width={400}
                height={300}
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              /> 
            </Box> */}
            
          </Box>
          <DoctorSlider doctors={doctors}/>
        </Grid>
      </ScrollReveal>
      {/* ))} */}
    </Box>
  );
};

export default Entries;

// const ReadMoreText = ({ text, lineClamp = 3 }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [isTruncated, setIsTruncated] = useState(false);
//   const [readMore, setReadMore] = useState(true);
//   const ref = useRef(null);
//   const customStyle = {
//     overflow: "hidden",
//     display: "-webkit-box",
//     WebkitBoxOrient: "vertical",
//     WebkitLineClamp: expanded ? "none" : lineClamp,
//     textOverflow: "ellipsis",
//   }
//   const [style, setStyle] = useState(customStyle);

//   useEffect(() => {
//     const el = ref.current;
//     if (el && el.scrollHeight > el.clientHeight) {
//       setIsTruncated(true);
//     }
//   }, []);

//   return (
//     <Box padding={1} >
//       <Typography
//         ref={ref}
//         sx={style}
//         style={{ whiteSpace: "pre-line"}}
//       >
//         {text}
//       </Typography>
//       {readMore && isTruncated ? (
//         <Button onClick={() => { setStyle({}); setReadMore(false) }} sx={{ mt: 1 }}>
//           Read More
//         </Button>
//       ) : isTruncated ? (<Button onClick={() => { setStyle(customStyle); setReadMore(true) }} sx={{ mt: 1 }}>
//         Show Less
//       </Button>) : (<></>)}
//     </Box>
//   );
// };
