import {Route} from "react-router-dom";
import { useState, useEffect } from "react";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
// import img3 from "./img/img3.png";
// import img4 from "./img/img4.png";

const Character = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img1,
        img2
    ];

    useEffect(() => {
        // 0.5초마다 이미지 변경
        const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 500);

        // 컴포넌트가 언마운트되면 타이머 정리
        return () => clearTimeout(timer);
    }, [currentIndex, images.length]);

    return (
        <div>
        <img src={images[currentIndex]} alt="Slider" />
        </div>
    );
};

export default Character;
