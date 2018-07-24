import React, { Component } from 'react';
import Carousel from 'react-image-carousel';

class ImageCarousel extends Component {
    generateImages = () => {
        return (
        [...Array(10).keys()].map(name => (
            `./webapp/static/${name}.jpg`
        )))
    }

    render() {
        let images = this.generateImages();
        return (
            <div className="carouselImage">
                <Carousel images={images} thumb loop />
            </div>
        )
    }
}

export default ImageCarousel;