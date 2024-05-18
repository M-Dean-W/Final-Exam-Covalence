import React, { useState, useEffect } from "react";
import { fetcher } from "../services/fetcher";
import { Book } from "../types";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface BooksProps { }

const Books = (props: BooksProps) => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetcher("/api/books", "GET").then((books) => setBooks(books));
    }, []);

    return (
        <Container>
            <div className="row justify-content-around p-3">
                <div className='col-sm-4 col-md-6'>
                    {books.map(book => (
                        <Card className="m-3" key={book.id}>
                            <Card.Title className="text-center">{book.title}</Card.Title>
                            <Card.Subtitle className="text-center">{book.author}</Card.Subtitle>
                            <Card.Body>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`/books/${book.id}`} className="btn btn-secondary text">Details</Link>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Books;