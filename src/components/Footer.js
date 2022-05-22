import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import mainLogo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div className='footer mt-5'>

            <Container className='d-none d-sm-block'>
                <Navbar expand="lg" className='py-4'>

                    <p>&copy; Copyright Dummy 2022</p>


                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={ { maxHeight: '100px' } }

                    >
                        <Nav.Link href="#action1" className='ps-4 active text-white'>Home</Nav.Link>
                        <Nav.Link href="#action2" className='ps-4 text-white'>Trip Planner</Nav.Link>
                        <Nav.Link href="#action3" className='ps-4 text-white'>Blogs</Nav.Link>
                        <Nav.Link href="#action4" className='ps-4 text-white'>Stories</Nav.Link>



                    </Nav>



                </Navbar>

            </Container>
            {/* mobile */ }

            <Container className='d-block d-sm-none'>
                <div className='text-center'>
                    <p className='py-4'>&copy; Copyright Dummy 2022</p>
                </div>
            </Container>

        </div>
    )
}

export default Footer