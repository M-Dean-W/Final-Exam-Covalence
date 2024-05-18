import React, { useState, useEffect } from "react";
import { fetcher } from "../services/fetcher";
import { Book } from "../types";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface BookDetailsProps { }

const BookDetails = (props: BookDetailsProps) => {
    const [book, setBook] = useState<Book[]>([]);
    const { id } = useParams()

    useEffect(() => {
        fetcher(`/api/books/${id}`, "GET").then((book) => setBook(book));
    }, []);

    return (
        <Container>
            <div className="row justify-content-around p-3">
                <div className='col-sm-4 col-md-6'>
                    {book.map(book => (
                        <Card key={book.id}>
                            <Card.Title className="text-center">{book.title}</Card.Title>
                            <Card.Subtitle className="text-center">{book.author}</Card.Subtitle>
                            <Card.Body>
                                <Card.Text>
                                    Category number: {book.category_id}
                                </Card.Text>
                                <Card.Text>Price: {book.price}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`/books/${book.id}/edit`} className="btn btn-secondary">Edit Me!</Link>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default BookDetails;