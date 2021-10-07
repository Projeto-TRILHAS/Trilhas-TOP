/* import React from 'react'
import "./Slider.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from '../slides/Slides'

const Slider = () => {
    return (
        <div className="carousel-container">
    <div className="carousel-title">
        <h2>My Projects</h2>
    </div>

    <Carousel>
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
        960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
        },
        }}
    </Carousel>
    </div>
    )
}

export default Slider
 */