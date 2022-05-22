import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel'
import { Container, Nav, Navbar, Row, Col, Button } from 'react-bootstrap'
import mainLogo from '../assets/logo.svg'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect } from "react";


const Header = () => {
    const [ distination, setDistination ] = React.useState( '' );

    const [ slideNo, setSlideNo ] = useState( 1 );
    useEffect( () => {
        function change( slide ) {
            setSlideNo( slides.indexOf( slide ) + 1 )
        }
        let slides = document.querySelectorAll( '.carousel-item' );
        slides = [ ...slides ];
        slides.forEach( slide => slide.addEventListener( 'transitionstart', () => change( slide ) ) );

        return () => {
            slides.forEach( slide => slide.removeEventListener( 'transitionstart', () => change( slide ) ) );
        }


    }, [] )

    const handleChange = ( event ) => {
        setDistination( event.target.value );


    };

    return (
        <header className='header mb-5'>
            <Container>
                <Navbar expand="lg" className='py-4'>
                    <Navbar.Brand href="#" className='navbar-brand'>
                        <img src={ mainLogo } alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={ { maxHeight: '100px' } }
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='ps-4 active'>Home</Nav.Link>
                            <Nav.Link href="#action2" className='ps-4'>Trip Planner</Nav.Link>
                            <Nav.Link href="#action3" className='ps-4'>Blogs</Nav.Link>
                            <Nav.Link href="#action4" className='ps-4'>Stories</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>


            <Container className='header-container'>
                <Row className='header-row'>
                    <Col xs={ 12 }>
                        <Carousel >

                            <Carousel.Item interval={ 1000 }>
                                <h4 className='slides-num'> 0{ slideNo } /<span className='slides-span'>04</span></h4>
                                <img
                                    className="d-block w-100"
                                    src={ require( '../assets/header.png' ) } alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h6>Wonderful Indonesia</h6>
                                    <h3>Just Living is not enought, one must have sunshine</h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={ 500 }>
                                <h4 className='slides-num'>0{ slideNo } /<span className='slides-span'>04</span></h4>
                                <img
                                    className="d-block w-100"
                                    src={ require( '../assets/header.png' ) }
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h6>Wonderful Indonesia</h6>
                                    <h3>Just Living is not enought, one must have sunshine</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h4 className='slides-num'>0{ slideNo } / <span className='slides-span'>04</span></h4>
                                <img
                                    className="d-block w-100"
                                    src={ require( '../assets/header.png' ) } alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h6>Wonderful Indonesia</h6>
                                    <h3>Just Living is not enought, one must have sunshine</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h4 className='slides-num'>0{ slideNo } /<span className='slides-span'>04</span></h4>
                                <img
                                    className="d-block w-100"
                                    src={ require( '../assets/header.png' ) } alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h6>Wonderful Indonesia</h6>
                                    <h3>Just Living is not enought, one must have sunshine</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Container className='position-absolute'>
                    <div className="white-box py-3 d-none d-sm-block">
                        <Row>
                            <Col sm={ 3 } className="mb-2 pe-2 py-2 white-col">
                                <FormControl className="w-100" variant="standard" sx={ { m: 1, minWidth: 200 } }>
                                    <InputLabel id="demo-simple-select-standard-label">All Destination</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={ distination }
                                        onChange={ handleChange }
                                        label="Distination"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={ 10 }>Ten</MenuItem>
                                        <MenuItem value={ 20 }>Twenty</MenuItem>
                                        <MenuItem value={ 30 }>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </Col>
                            <Col sm={ 3 } className="mb-2 pe-2 py-2 white-col">
                                <FormControl className="w-100" variant="standard" sx={ { m: 1, minWidth: 250 } }>
                                    <TextField id="standard-basic" label="Travelers" variant="standard" placeholder='Number of Travelers' />
                                </FormControl> </Col>

                            <Col sm={ 3 } className="mb-2 pe-2 mt-2 white-col">

                                <DateRangePickerComponent id="daterangepicker" placeholder='Check In  |  Check Out' label="jjj" />
                            </Col>
                            <Col sm={ 3 } className="header-col">
                                <Button className='header-btn'><ArrowForwardIcon size="large" className='arrow-style'></ArrowForwardIcon></Button>
                            </Col>
                        </Row>
                    </div>

                    {/* mobile */ }
                    <div className="white-box py-3 d-block d-sm-none">
                        <Row>
                            <Col xs={ 6 } className="mb-2 pe-2 py-2 white-col">
                                <FormControl variant="standard" sx={ { m: 1, minWidth: 200 } }>
                                    <InputLabel id="demo-simple-select-standard-label">All Destination</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={ distination }
                                        onChange={ handleChange }
                                        label="Distination"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={ 10 }>Ten</MenuItem>
                                        <MenuItem value={ 20 }>Twenty</MenuItem>
                                        <MenuItem value={ 30 }>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </Col>
                            <Col xs={ 6 } className="mb-2 pe-2 py-2 white-col">
                                <FormControl variant="standard" sx={ { m: 1, minWidth: 200 } }>
                                    <TextField id="standard-basic" label="Travelers" variant="standard" placeholder='Number of Travelers' />
                                </FormControl> </Col>
                        </Row>
                        <Row>

                            <Col xs={ 6 } className="mb-2 pe-2 mt-2 white-col">

                                <DateRangePickerComponent id="daterangepicker" placeholder='Check In  |  Check Out' label="jjj" />
                            </Col>
                            <Col xs={ 6 } className="header-col">
                                <Button className='header-btn'><ArrowForwardIcon size="large" className='arrow-style'></ArrowForwardIcon></Button>
                            </Col>
                        </Row>                    </div>
                    {/* mobile */ }


                </Container>

            </Container>


        </header >
    )
}



export default Header