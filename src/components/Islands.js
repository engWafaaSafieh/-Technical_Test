import React from 'react'
import Slider from "react-slick";
import beach from "../assets/Overlay.png"
import { Container, Row } from 'react-bootstrap';
const Islands = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1.5
    };
    return (
        <>
            <section className='islands-section my-5 py-5 d-none d-sm-block'>
                <Container className='position-relative'>
                    <Row className='islands-row'>
                        <Slider { ...settings }>
                            <div className='islands-img position-relative'>
                                <img className='w-100 img-responsive' src={ beach } alt={ "beach" } />

                                <div className='position-absolute islands-text'>Bali Island</div>

                            </div>
                            <div className='islands-img position-relative'>
                                <img className='w-100 img-responsive' src={ beach } alt={ "beach" } />
                                <div className='position-absolute islands-text'>Bali Island</div>
                            </div>
                        </Slider>
                    </Row>
                </Container>        </section>
            {/* mobile */ }
            <section className='islands-section my-5 d-block d-sm-none'>
                <Container className='position-relative'>
                    <Row className='islands-row'>
                        <Slider { ...settings }>
                            <div className='islands-img position-relative'>
                                <img className='w-100 img-responsive' src={ beach } alt={ "beach" } />

                                <div className='position-absolute islands-text'>Bali Island</div>

                            </div>
                            <div className='islands-img position-relative'>
                                <img className='w-100 img-responsive' src={ beach } alt={ "beach" } />
                                <div className='position-absolute islands-text'>Bali Island</div>
                            </div>
                        </Slider>
                    </Row>
                </Container>        </section></>

    )
}

export default Islands