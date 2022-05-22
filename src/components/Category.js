import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from 'react-bootstrap'
import beach from '../assets/beach.png'
import waterfall from '../assets/waterfall.png'
import mountain from '../assets/mountain.png'
import garden from '../assets/garden.png'
import { Button } from 'react-bootstrap'
export const Category = () => {
    return (
        <>
            <Container className="category d-none d-sm-block">
                <Row >
                    <Col sm={ 3 } >
                        <div className="image-container">
                            <img className='w-100 h-100 img-responsive image-container' src={ beach } alt={ "beach" } />
                            <div className="centered">Beach</div>
                            <div className="after"><Button className='btn px-5 py-3'>Read More</Button></div></div>
                    </Col>

                    <Col sm={ 3 } >
                        <div className="image-container">
                            <img className='w-100 h-100 img-responsive image-container' src={ waterfall } alt={ "waterfall" } />
                            <div className="centered">Waterfall</div>
                            <div className="after"><Button className='btn px-5 py-3'>Read More</Button></div></div>
                    </Col>
                    <Col sm={ 3 } >
                        <div className="image-container">
                            <img className='w-100 h-100 img-responsive image-container' src={ mountain } alt={ "mountain" } />
                            <div className="centered">Mountain</div>
                            <div className="after"><Button className='btn px-5 py-3'>Read More</Button></div></div>
                    </Col>
                    <Col sm={ 3 } >
                        <div className="image-container">
                            <img className='w-100 h-100 img-responsive image-container' src={ garden } alt={ "garden" } />
                            <div className="centered">Garden</div>
                            <div className="after"><Button className='btn px-5 py-3'>Read More</Button></div></div>
                    </Col>
                </Row>
            </Container>

            {/* mobile */ }
            <Container className="category d-block d-sm-none mt-5">
                <Row className='px-4 mb-2'>
                    <Col xs={ 6 } >
                        <div className="image-container">
                            <img className='w-100 h-100 img-responsive image-container' src={ beach } alt={ "beach" } />
                            <div className="centered">Beach</div>
                            <div className="after"><Button className='btn px-5 py-3'>Read More</Button></div></div>
                    </Col>

                    <Col xs={ 6 } >
                        <div className="image-container">
                            <img className='w-100 h-100 img-responsive image-container' src={ waterfall } alt={ "waterfall" } />
                            <div className="centered">Waterfall</div>
                            <div className="after"><Button className='btn px-5 py-3'>Read More</Button></div></div>
                    </Col>
                </Row>
                <Row className='px-4 mb-2'>
                    <Col xs={ 6 } >
                        <div className="image-container">
                            <img className='w-100 h-100 img-responsive image-container' src={ mountain } alt={ "mountain" } />
                            <div className="centered">Mountain</div>
                            <div className="after"><Button className='btn px-5 py-3'>Read More</Button></div></div>
                    </Col>
                    <Col xs={ 6 } >
                        <div className="image-container">
                            <img className='w-100 h-100 img-responsive image-container' src={ garden } alt={ "garden" } />
                            <div className="centered">Garden</div>
                            <div className="after"><Button className='btn px-5 py-3'>Read More</Button></div></div>
                    </Col>
                </Row>
            </Container>
            {/* mobile */ }
        </>
    )
}
export default Category