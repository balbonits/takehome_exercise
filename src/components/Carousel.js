import React from "react";
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Button, Card, Icon } from "semantic-ui-react";
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarouselItem = ({ id, item }) => {
    const { original } = item.images;
    return (<Slide index={id}>
        <div style={{ padding: 10 }}>
            <Card as={Image} image={original.url} header={item.title} />
        </div>
    </Slide>);
}

const Carousel = (props) => {
    return (<CarouselProvider 
        totalSlides={5} 
        naturalSlideWidth={1} 
        naturalSlideHeight={1.25} 
        hasMasterSpinner={'true'}
        style={{ width: "300px", margin: 'auto'}}>
        <Slider spinner={() => <Icon loading name='spinner' size={'huge'} />}>
            {props.images.map((item, idx) => <CarouselItem id={idx} key={idx} item={item} />)}
        </Slider>
        <Button as={ButtonBack}>&laquo;</Button>
        <Button as={ButtonNext}>&raquo;</Button>
    </CarouselProvider>);
};

export default Carousel;