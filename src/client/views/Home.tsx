import React, { useState, useEffect } from "react";
import { Book } from "../types";
import { Card, Container } from "react-bootstrap";

interface HomeProps { }

const Home = (props: HomeProps) => {
   

    return (
        <Container>
            <Card>
                <Card.Title></Card.Title>
                <Card.Subtitle></Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        Welcome to the Bookstore Homepage! To gain access to adding and editing books, please login or register a new account! 
                    </Card.Text>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
        </Container>
    );
};

export default Home;