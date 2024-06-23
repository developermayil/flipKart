

import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import '@/pages/style/slider.css'


const images = [
    { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20" },
    { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ec5339b6299d2196.jpeg?q=20" },
    { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0b258b0085c395ee.jpg?q=20" },
    { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/33e436051e877120.jpeg?q=20" }
];





export default function Carousel() {
    return (
        <>
            <Slider imageList={images} />
        </>
    )
}