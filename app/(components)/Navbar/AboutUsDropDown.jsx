import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { Bold, NavElements } from "../Global";

const AboutUsDropDown = ({ item, Facilities, selectedPage, setSelectedPage }) => {
  const [open, setOpen] = useState(false)
  console.log("Facilities", Facilities);
  const AboutUs = [{id:1,indexx:1,name:"Overview", link:"/overview"}, {id:2,indexx:2,name:"Mission & Vision", link: '/vision'}, {id:3,indexx:3,name:"Governing Council", link: '/governing_council'}, {id:4,indexx:4,name:"Our Team", link: '/team'},]
  return (
    <Box
      key={item.name}
    >
      <Button
        sx={{ color: NavElements, fontWeight: Bold?'bold':none, backgroundColor: selectedPage === item.link ? 'action.hover' : 'transparent',
          '&:hover': {
            backgroundColor: 'action.hover',
          }, marginRight: '1px' }}
        onMouseEnter={() => setOpen(true)} // Change onHover to onMouseEnter
        onMouseLeave={() => setOpen(false)} // Optionally, close on mouse leave
      >
        {item.name} <ExpandMore />
      </Button>

      {open ?
        <Box boxShadow={3} borderRadius={1} display='flex' width='350px' backgroundColor='white' position='absolute' flexDirection='column' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} paddingY={1} sx={{maxHeight: '300px', overflowY: 'auto', zIndex: 6 }}>
          {AboutUs?.length > 0 ? (
            AboutUs.map((facility) => (<Box key={facility.id} padding={1} onClick={() => setOpen(false)} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
              <Link href={facility.link} passHref legacyBehavior>
                <Box display='flex' onClick={() => { setSelectedPage(item.link) }}><Typography color="#454545" marginLeft={1}>{facility.name}</Typography></Box>
              </Link>
            </Box>)))
            : (
              <Box padding={1} onClick={() => setOpen(false)} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
                <Typography >No facilities available</Typography>
              </Box>
            )}
        </Box> : <></>}
    </Box>
  );
};

export default AboutUsDropDown;
