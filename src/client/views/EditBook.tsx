import React, { useState, useEffect } from "react";
import { fetcher } from "../services/fetcher";
import { Book, Category } from "../types";
import { Card, Container, Form, Button, CardFooter } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

interface EditBooksProps { }

const EditBooks = (props: EditBooksProps) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const navigate = useNavigate()
    const [category_id, setCatID] = useState<number | null>(null)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState<number>(0)
    const token = localStorage.getItem('token')
    const [book, setBook] = useState<Book[]>([]);
    const {id} = useParams()

    if (!token) {
        navigate('/login')
    }

    useEffect(()=> {
        fetcher(`/api/books/${id}`, "GET")
        .then(book => {
            setBook(book)
            setTitle(book[0].title)
            setAuthor(book[0].author)
            setPrice(book[0].price)
            setCatID(book[0].category_id)
        })
    },[])

    useEffect(() => {
        fetcher("/api/categories", "GET").then((categories) => setCategories(categories));
    }, []);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!category_id) {
            alert('Choose Category')
        }

        fetcher(`/api/books/${id}`,'PUT', {category_id, author, title, price})
            .then
            navigate(`/books/${id}`)
            
    }

    const handleDelete = (id:number) => {
        fetcher(`/api/books/${id}`, 'DELETE')
            .then(data => console.log(data.message))
            navigate('/books')
    }

    return (
        <Container>
           <Card className="m-3">
            <Card.Body>
                <Card.Title>Edit info and submit or delete book</Card.Title>
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
                    <Button className="mt-2 btn-secondary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
            <CardFooter>
                {book.map(book => (
                     <Button key={book.id} className="btn-danger" onClick={()=> handleDelete(book.id)}>Delete This Book</Button>
                ))}
            </CardFooter>
           </Card>
        </Container>
    );
};

export default EditBooks;