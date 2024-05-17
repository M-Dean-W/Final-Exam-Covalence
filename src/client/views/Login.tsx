import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { fetcher } from "../services/fetcher";

interface LoginProps { }

const Login = (props: LoginProps) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetcher('/auth/login','POST', {email, password})
            .then(token => {
                localStorage.setItem('token', token)
                navigate('/')
            })
            .catch(() => alert('Something went wrong or Invalid credentials'))
    }
   
    return (
        <Container>
           <Card>
            <Card.Body>
                <Card.Title>Login to your Book Account</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button type="submit">Login</Button>
                    <Link to={'/register'}>Register New Account</Link>
                </Form>
            </Card.Body>
           </Card>
        </Container>
    );
};

export default Login