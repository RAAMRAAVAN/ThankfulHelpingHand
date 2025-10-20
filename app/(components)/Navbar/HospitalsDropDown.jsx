import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { Bold, NavElements } from "../Global";

const HospitalsDropdown = ({ item, Hospitals }) => {
    const [open, setOpen] = useState(false)
    const Resources = [{id: 1, name: "Employee handbook", link:'Resources/Employee handbook.pdf'}]

    return (
        <Box
            key={item.name}
        >
            <Button
                sx={{ color: NavElements, fontWeight: Bold?'bold':none }}
                onMouseEnter={() => setOpen(true)} // Change onHover to onMouseEnter
                onMouseLeave={() => setOpen(false)} // Optionally, close on mouse leave
            >
                {item.name} <ExpandMore />
            </Button>

            {open ?
                <Box boxShadow={3} sx={{maxHeight: '300px', overflowY: 'auto', zIndex: 10001 }} borderRadius={1} display='flex' width='350px' backgroundColor='white' position='absolute' flexDirection='column' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} paddingY={1}>
                    {Resources?.length > 0 ? (
                        Resources.map((resource) => (<Box key={resource.id} padding={1} onClick={() => setOpen(false)} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
                            <Link href={resource.link} passHref legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Box display='flex'><Typography color="#454545" marginLeft={1}>{resource.name}</Typography></Box>
                                </a>
                            </Link>
                        </Box>)))
                        : (
                            <Box padding={1} onClick={() => setOpen(false)} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'lightgray', display: 'flex', width: '100%' } }}>
                                <Typography >No Hospitals Available</Typography>
                            </Box>
                        )}
                </Box> : <></>}
        </Box>
    );
};

export default HospitalsDropdown;
