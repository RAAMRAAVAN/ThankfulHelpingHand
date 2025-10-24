'use client'
import ImageSlider from './ImageSlider'
import { ImageSliderData } from '../../../lib/fetchData';
import { useEffect, useState } from 'react';
const ImageSliderMain = () => {
    const [images, setImages] = useState([]);
    const fetchImageSlider = async () => {
        // setLoading2(true);
        try {
            const data = await ImageSliderData();
            setImages(data);
        } catch (error) {
            console.error("Error fetching hospital data:", error);
        } finally {
            // setLoading2(false);
        }
    };

    useEffect(() => {
        fetchImageSlider();
    }, [])

    const NGOimages = [{addedBy:1, created_at:"2025-05-21 22:28:15", hospitalId:"1", id:1,indexx:1,
photo:"Slider/Sli_1.png", updated_at:"2025-05-21 22:28:15"},
{addedBy:1, created_at:"2025-05-21 22:28:15", hospitalId:"1", id:2,indexx:2,
photo:"Slider/Sli1.png", updated_at:"2025-05-21 22:28:15"},
{addedBy:1, created_at:"2025-05-21 22:28:15", hospitalId:"1", id:3,indexx:3,
photo:"Slider/Sli2.png", updated_at:"2025-05-21 22:28:15"},
{addedBy:1, created_at:"2025-05-21 22:28:15", hospitalId:"1", id:4,indexx:4,
photo:"Slider/Sli3.png", updated_at:"2025-05-21 22:28:15"},
{addedBy:1, created_at:"2025-05-21 22:28:15", hospitalId:"1", id:5,indexx:5,
photo:"Slider/Sli4.png", updated_at:"2025-05-21 22:28:15"},
{addedBy:1, created_at:"2025-05-21 22:28:15", hospitalId:"1", id:6,indexx:6,
photo:"Slider/Sli5.png", updated_at:"2025-05-21 22:28:15"},
{addedBy:1, created_at:"2025-05-21 22:28:15", hospitalId:"1", id:7,indexx:7,
photo:"Slider/Sli6.png", updated_at:"2025-05-21 22:28:15"},
{addedBy:1, created_at:"2025-05-21 22:28:15", hospitalId:"1", id:8,indexx:8,
photo:"Slider/Sli7.png", updated_at:"2025-05-21 22:28:15"},
{addedBy:1, created_at:"2025-05-21 22:28:15", hospitalId:"1", id:9,indexx:9,
photo:"Slider/Sli8.png", updated_at:"2025-05-21 22:28:15"}
]
    return (<>
        <ImageSlider Images={NGOimages} />
    </>);
}
export default ImageSliderMain
