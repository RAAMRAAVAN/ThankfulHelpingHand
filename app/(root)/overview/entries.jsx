"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import ReadMoreText from "@/app/(components)/FacilitiesNew2/ReadMoreText";
import Image from "next/image";
import ScrollReveal from "@/app/(components)/Animation/ScrollReveal";
import { color1 } from "@/app/(components)/Global";

const AboutUs = {
  moto: "ॐ सर्वे भवन्तु सुखिनः । सर्वे सन्तु निरामयाः । सर्वे भद्राणि पश्यन्तु । मा कश्चिद्दुःखभाग्भवेत् । ॐ शान्तिः शान्तिः शान्तिः ॥|",
  deed: "Our deed mission is to comprehensively address poverty and instigate positive change across various critical sectors, encompassing healthcare, environmental preservation, disability support, women's empowerment, hunger alleviation, mental health advocacy, skill development, clean water access, rural development, the promotion of art and culture, youth advancement through sports, elderly care, emergency relief initiatives, education infrastructure enhancements, and disaster relief efforts. We are equally committed to endeavors such as running old age homes, promoting education, uplifting widowed women, caring for orphans, and championing animal welfare. Our overarching objective is to collaboratively innovate and execute sustainable projects that uplift disadvantaged communities, foster inclusive growth, and advance societal well-being. Through diverse activities tailored for individuals and groups, we prioritize spiritual and moral development at all life stages, leveraging digital platforms for spiritual content dissemination and outreach. Additionally, we offer free programs encompassing food distribution, medicine provision, medical camps, counseling, and guidance workshops to promote holistic well-being. We actively promote interfaith dialogue, facilitate interactive sessions, podcasts, and live discussions on digital platforms to cultivate communal harmony and peace among diverse communities. Moreover, we establish schools grounded in moral and spiritual principles, contributing to the holistic development of individuals and society.",
};
const Entries = (props) => {
  const { entries } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      marginY={4}
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
              OUR MOTO
            </Typography>
            <Box display="flex" width="100%" justifyContent="center">
              <Box display="flex" sx={{width:{md:"30%", sm:"90%"}}}>
                <Typography textAlign='center'>{AboutUs.moto}</Typography>
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
              DEED
            </Typography>
            <Box display="flex" width="100%" justifyContent="center">
              <Box display="flex" width="90%">
                <Typography textAlign="center">{AboutUs.deed}</Typography>
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
