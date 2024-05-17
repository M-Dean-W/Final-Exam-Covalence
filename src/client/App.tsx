import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Books from "./views/Books";
import BookDetails from "./views/BookDetails";
import AddBooks from "./views/AddBook";
import EditBooks from "./views/EditBook";
import Login from "./views/Login";
import Register from "./views/Register";
import CompleteNav from "./components/CompleteNav";

interface AppProps { }

const App = (props: AppProps) => {
  
    return (
        <BrowserRouter>
        <CompleteNav/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/books" element={<Books/>}></Route>
            <Route path="/books/:id" element={<BookDetails/>}></Route>
            <Route path="/books/new" element={<AddBooks/>}></Route>
            <Route path="/books/:id/edit" element={<EditBooks/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
        </BrowserRouter>
    );
};

export default App;
