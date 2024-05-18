import React, { useState, useEffect } from "react";
import { Book } from "../types";
import { Card, Container } from "react-bootstrap";

interface HomeProps { }

const Home = (props: HomeProps) => {
   

    return (
        <Container>
            <Card className="rounded-3 m-3">
                <Card.Title></Card.Title>
                <Card.Subtitle></Card.Subtitle>
                <Card.Body>
                    <Card.Text className="text-center" style={{ fontSize: '2em'}}>
                        Welcome to the Bookstore Homepage! To gain access to adding and editing books, please login or register a new account! 
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;