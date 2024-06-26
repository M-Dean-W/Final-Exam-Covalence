import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

interface CompleteNavProps { }

const CompleteNav = (props: CompleteNavProps) => {

        const navigate = useNavigate()
        const logout = () => {
            localStorage.removeItem('token')
            navigate('/')
        }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Nav>
                <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
                <Nav.Link as={NavLink} to={'/books'}>Books</Nav.Link>
                <Nav.Link as={NavLink} to={'/books/new'}>Add Books</Nav.Link>
                <Nav.Link as={NavLink} to={'/login'}>Login</Nav.Link>
                <Button onClick={logout} className="btn-secondary">Logout</Button>
            </Nav>
        </Navbar>
    )

}

export default CompleteNav