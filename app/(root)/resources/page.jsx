'use client'
import { Box, Grid, Typography } from "@mui/material";
import { API, color1, color4, color6, color7 } from "@/app/(components)/Global";
import VideoGrid from "@/app/(components)/Videos/VideoGrid";
import Facilities from '@/app/(components)/Resources/FacilityData'
// import ParallelogramGrid from './ParallelogramGrid';
import { LatestVideos2, VideosAccess } from '../../../lib/fetchData';
import Image from "next/image";
import { useEffect, useState } from "react";
const page = () => {
    const [LatestVideosData, setVideos] = useState([]);

    const fetchVideos = async () => {
        console.log("fetch videos")
        setVideos(await LatestVideos2())
    }
    useEffect(() => {
        fetchVideos();
    }, [])
    return (<>
        <Box display="flex" justifyContent="center" marginY={5}>
            <Facilities />
        </Box>
    </>)
}
export default page;