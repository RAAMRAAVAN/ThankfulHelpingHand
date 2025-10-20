import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { ExpandMore } from "@mui/icons-material";
import { Bold, NavElements } from "../Global";
import { BsWhatsapp } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";

const ContactUsDropdown = ({item, selectedPage, setSelectedPage}) => {
  const [open, setOpen] = useState(false);
  const HospitalDetails = useSelector(selectHospitalDetails);
  return (
    <Box
      sx={{ display: "inline-block", position: 'relative', zIndex: '10001' }}
    >
      <Button
        sx={{
          color: NavElements, fontWeight: Bold ? 'bold' : none, backgroundColor: selectedPage === item.link ? 'action.hover' : 'transparent',
          '&:hover': {
            backgroundColor: 'action.hover',
          }, marginRight: '1px'
        }}
        onMouseEnter={() => setOpen(true)} // Change onHover to onMouseEnter
        onMouseLeave={() => setOpen(false)} // Optionally, close on mouse leave
      >
        Contact Us <ExpandMore />
      </Button>
      {open ? <Box boxShadow={3} sx={{ maxHeight: '300px', overflowY: 'auto', zIndex: 10001 }} borderRadius={1} display='flex' width='300px' backgroundColor='white' position='absolute' flexDirection='column' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} paddingY={1}>
        <Box padding={1} onClick={() => setOpen(false)} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Link href="/contact" passHref legacyBehavior >
            <Box display='flex' onClick={() => { setSelectedPage(item.link) }}><RiContactsLine size={24} color="gray" /><Typography color="#454545" marginLeft={1}>Contact Us</Typography></Box>
          </Link>
        </Box>
        <Box padding={1} sx={{ cursor: 'pointer', borderTop: '1px lightgray solid', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Box onClick={() => setOpen(false)} display='flex'><IoIosCall size={25} color="gray" />
            <Typography component="a"
              href={`tel:7378587253`} sx={{ cursor: "pointer" }} color="#454545" marginLeft={1}>7378587253</Typography>
          </Box>
        </Box>

         <Box padding={1} sx={{ cursor: 'pointer', borderTop: '1px lightgray solid', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Box onClick={() => setOpen(false)} display='flex'><BsWhatsapp size={23} color="gray" />
            <Typography component="a"
              href={`https://wa.me/7378587253`}
              target="_blank"
              rel="noopener noreferrer" sx={{ cursor: "pointer" }} color="#454545" marginLeft={1}>7378587253</Typography>
          </Box>
        </Box>
        {HospitalDetails.email !== null ? <Box padding={1} sx={{ cursor: 'pointer', borderTop: '1px lightgray solid', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
          <Box onClick={() => setOpen(false)} display='flex'><IoIosMail size={24} color="gray" />
            <Typography component="a"
              href={`mailto:info@thankfulhelpinghand.org`}
              sx={{ cursor: "pointer" }} color="#454545" marginLeft={1}>info@thankfulhelpinghand.org</Typography>
          </Box>
        </Box> : <></>}
      </Box> : <></>}


    </Box>
  );
};

export default ContactUsDropdown;