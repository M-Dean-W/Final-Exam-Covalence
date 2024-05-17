import React, { useState, useEffect } from "react";
import { fetcher } from "../services/fetcher";
import { Book } from "../types";
import { Card, Container } from "react-bootstrap";

interface AddBooksProps { }

const AddBooks = (props: AddBooksProps) => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetcher("/api/books", "GET").then((books) => setBooks(books));
    }, []);

    return (
        <Container>
            <Card>
                <Card.Title></Card.Title>
                <Card.Subtitle></Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
        </Container>
    );
};

export default AddBooks;