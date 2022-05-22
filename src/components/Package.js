
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Package = () => {
    return (
        <>
            <Container className='my-5 package d-none d-sm-block'>
                <Row>
                    <Col xs={ 8 }>
                        <h1 className='py-5'>Enjoy an exciting your trip</h1></Col>
                    <Col xs={ 4 } className='btn-right'>
                        <Button className='btn-style px-5 py-2' >view all</Button>{ ' ' }</Col>


                </Row>

            </Container>
            {/* mobile */ }
            <Container className='my-5 package d-block d-sm-none'>
                <Row>
                    <Col xs={ 8 } className="ps-5">
                        <h1 className='py-5'>Enjoy an exciting your trip</h1></Col>
                    <Col xs={ 4 } className='btn-right pe-5'>
                        <Button className='btn-style px-4 py-2' >view all</Button>{ ' ' }</Col>


                </Row>

            </Container>
        </>


    )
}

export default Package