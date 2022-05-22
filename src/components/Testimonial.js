import React from 'react'
import Slider from "react-slick";
import man from "../assets/man.png"
import { Container, Row, Col } from 'react-bootstrap';
const Testimonial = () => {
    const settings = {


        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return (
        <section className='section my-5 py-5'>
            <Container>
                <Row>

                    <Col xs={6}>

                        <div>
                            <h1 className='testimonial-h1'>What the final <br /> word</h1>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <Slider {...settings}>

                            <div className='div-style'>
                                <img className='w-100 img-responsive ms-2' src={man} alt={"man"} /></div>
                            <div className='px-3'>
                                <p className='testimonial-p ps-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna. aliquam, purus sit amet luctus enatis, lectus magna fringilla urna. aliquam, purus sit amet luctus
                                </p>
                                <h5 className='px-3 testimonial-h5'>
                                    Emil Jhonson
                                </h5>
                                <span className='ps-3 testimonial-span'>Visitor</span>

                            </div>


                            <div className='div-style'>
                                <img className='w-100 img-responsive ms-2' src={man} alt={"man"} /></div>
                            <div className='px-3'>
                                <p className='testimonial-p ps-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna. aliquam, purus sit amet luctus enatis, lectus magna fringilla urna. aliquam, purus sit amet luctus
                                </p>
                                <h5 className='px-3 testimonial-h5'>
                                    Emil Jhonson
                                </h5>
                                <span className='ps-3 testimonial-span'>Visitor</span>
                            </div>
                            <div className='div-style'>
                                <img className='w-100 img-responsive ms-2' src={man} alt={"man"} /></div>
                            <div className='px-3'>
                                <p className='testimonial-p ps-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna. aliquam, purus sit amet luctus enatis, lectus magna fringilla urna. aliquam, purus sit amet luctus
                                </p>
                                <h5 className='px-3 testimonial-h5'>
                                    Emil Jhonson
                                </h5>
                                <span className='ps-3 testimonial-span'>Visitor</span>

                            </div>
                            <div className='div-style'>
                                <img className='w-100 img-responsive ms-2' src={man} alt={"man"} /></div>
                            <div className='px-3'>
                                <p className='testimonial-p ps-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna. aliquam, purus sit amet luctus enatis, lectus magna fringilla urna. aliquam, purus sit amet luctus
                                </p>
                                <h5 className='px-3 testimonial-h5'>
                                    Emil Jhonson
                                </h5>
                                <span className='ps-3 testimonial-span'>Visitor</span>

                            </div>
                        </Slider>
                    </Col>


                </Row>

            </Container>        </section>
    )
}

export default Testimonial