import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'

const NavbarComp=()=>{
    return(
        <Navbar bg='light' expand='lg'>
            <Container>
                <Link href='/' passHref>
                    <Navbar.Brand>NextJS Firebase Auth</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link href ="/signup" passHref>
                            SignUp
                        </Link>
                        <Link href ="/login" passHref>
                            Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp