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
                        <h1>Music Cafe</h1>
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
                        <h1>Through the plan window</h1>
                        <p>Garden of Blue Sky.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default Main;