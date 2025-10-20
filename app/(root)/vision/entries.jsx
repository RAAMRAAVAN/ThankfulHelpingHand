"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import ReadMoreText from "@/app/(components)/FacilitiesNew2/ReadMoreText";
import Image from "next/image";
import ScrollReveal from "@/app/(components)/Animation/ScrollReveal";
import { color1 } from "@/app/(components)/Global";

const AboutUs = {
  vision: "To build an inclusive, compassionate, and empowered society where every individual has access to basic needs, education, healthcare, and equal opportunities — fostering harmony, dignity, and holistic well-being for all.",
  mission: "Our mission is to comprehensively address poverty and bring positive transformation across key sectors including healthcare, education, women’s empowerment, environmental protection, mental health, rural development, and animal welfare. We strive to uplift marginalized communities through sustainable initiatives that promote self-reliance, moral and spiritual growth, and social harmony.Through free welfare programs, digital outreach, interfaith dialogue, and value-based education, we aim to create a society rooted in compassion, equality, and collective progress.",
};
const Entries = (props) => {
  const { entries } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      // border="1px black solid"
    >
          <Box
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
            textAlign="justify"
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              marginBottom={1}
              padding={1}
              color={color1}
              textAlign="center"
            >
              {/* {entry.name} */}
              Our Vision
            </Typography>
            <Box display="flex" width="100%" justifyContent="center">
              <Box display="flex" width="90%">
                <Typography textAlign='center'>{AboutUs.vision}</Typography>
              </Box>
            </Box>

            <Typography
              variant="h5"
              fontWeight="bold"
              marginBottom={1}
              padding={1}
              textAlign="center"
              color={color1}
            >
              {/* {entry.name} */}
              Our Mission
            </Typography>
            <Box display="flex" width="100%" justifyContent="center">
              <Box display="flex" width="90%">
                <Typography textAlign="center">{AboutUs.mission}</Typography>
              </Box>
            </Box>

          </Box>
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
