import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

class ResponsiveCarousel extends Component {
    generateImages = () => {
        return (
        [...Array(10).keys()].map(name => (
            <div key={name}>
                <img className="photo" src={`./static/${name}.jpg`} alt={name} />
                <p className="legend">
                    {`Photo ${name}`}
                </p>
            </div>
        )))
    }

    render() {
        return (
            <div className="carouselResponsive">
                <Carousel
                    showArrows
                >
                    {this.generateImages()}
                </Carousel>
            </div>
        );
    }
}


export default ResponsiveCarousel;
