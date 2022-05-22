import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from 'react-bootstrap'
import mask from '../assets/mask.png'
import Button from 'react-bootstrap/Button'
const Explore = () => {
    return (
        <>
            <Container className="my-5 pt-5 explore-mt d-none d-sm-block">
                <Row >
                    <Col xs={ 6 } className="pt-5">
                        <span className='span-style py-5 mt-4'>#TravelTip</span>
                        <h1 className='h1-style py-3 my-2'>How to explore <br />bunaken in 2 days?</h1>

                        <p className='my-3 p-style pe-5'>Bunaken is an island of 8.08 km² in the Bay of Manado, which is
                            located north of the island of Sulawesi, Indonesia. This island is
                            part of the city of Manado, the capital of the province of North
                            Sulawesi, Indonesia. Bunaken Island can be tE.
                        </p>

                        <p className='my-5  p-style pe-5'>
                            This island is part of the city of Manado, the capital of the province
                            of North Sulawesi, Indonesia. Bunaken Island can be tE.

                        </p>
                        <Button className='btn-style p-4 ' >READ MORE</Button>{ ' ' }

                    </Col>
                    <Col xs={ 6 }>

                        <img className='w-100 img-responsive' src={ mask } alt={ "mask" } />
                    </Col>
                </Row>

            </Container>

            <Container className="explore-mt d-block d-sm-none">
                <Row className='px-4'>
                    <Col xs={ 6 } >
                        <span className='span-style'>#TravelTip</span>
                        <h1 className='h1-style'>How to explore <br />bunaken in 2 days?</h1>

                        <p className='p-style'>Bunaken is an island of 8.08 km² in the Bay of Manado, which is
                            located north of the island of Sulawesi, Indonesia. This island is
                            part of the city of Manado, the capital of the province of North
                            Sulawesi, Indonesia. Bunaken Island can be tE.
                        </p>

                        <Button className='btn-style' >READ MORE</Button>{ ' ' }

                    </Col>
                    <Col xs={ 6 }>

                        <img className='w-100 img-responsive' src={ mask } alt={ "mask" } />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Explore


