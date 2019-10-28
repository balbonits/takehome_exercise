import React from "react";

// css
import 'Carousel.css';

const CarouselItem = (props) => {
    return (<li className={"carousel-content-item"}></li>);
}

const Carousel = (props) => {
    return (<div className={"carousel"}>
        <span className={"carousel-control prev-button"}></span>
        <div className={"carousel-content"}>
            <ul className={"carousel-content-items"}>
                <CarouselItem />
            </ul>
        </div>
        <span className={"carousel-control next-button"}></span>
    </div>);
};

export default SiteNav;