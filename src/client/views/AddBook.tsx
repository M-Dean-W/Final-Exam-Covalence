import React, { useState, useEffect } from "react";
import { fetcher } from "../services/fetcher";
import { Book, Category } from "../types";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface AddBooksProps { }

const AddBooks = (props: AddBooksProps) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const navigate = useNavigate()
    const [category_id, setCatID] = useState<number | null>(null)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState<number>()
    const token = localStorage.getItem('token')

    if (!token) {
        navigate('/login')
    }

    useEffect(() => {
        fetcher("/api/categories", "GET").then((categories) => setCategories(categories));
    }, []);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!category_id) {
            alert('Choose Category')
        }

        fetcher('/api/books','POST', {category_id, author, title, price})
            .then(data => navigate(`/books/${data.id}`))
            
    }

    return (
        <Container>
           <Card>
            <Card.Body>
                <Card.Title>Login to your Book Account</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Select value={category_id ?? ''} onChange={(e) => setCatID(Number(e.target.value))}>
                        <option>Select Category</option>
                        {categories.map(category=>(
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </Form.Select>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
            </Card.Body>
           </Card>
        </Container>
    );
};

export default AddBooks;