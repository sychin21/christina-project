import React from 'react';
import {Carousel} from 'react-bootstrap'

const Main = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"/image/main_image2.jpg"}
                        alt="Second slide"
                        style={{height: "96vh"}}
                    />

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"/image/main_image3.jpg"}
                        alt="Third slide"
                        style={{height: "96vh"}}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default Main;