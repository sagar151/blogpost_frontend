import React from "react";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
// import {Link} from "react-bootstrap"
import  {Container} from "react-bootstrap"
const  NavBar =()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">BlogPost website</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add">Add Blog</Nav.Link>
                    {/*<Nav.Link href="/details">Display Blog</Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>

    )
}
export  default  NavBar