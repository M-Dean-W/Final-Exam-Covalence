import { RowDataPacket } from "mysql2";
import { selectQ, modifyQ } from "../queryUtils";

export interface IBooksRow extends RowDataPacket {
    id:number;
    category_id:number;
    title:string;
    author:string;
    price:number;
    created_at:number;
}

export function getAllBooks() {
    return selectQ<IBooksRow>('SELECT * FROM Books')
}

export function getOneBook(id:number) {
    return selectQ<IBooksRow>('SELECT * FROM Books WHERE Books.id = ?', [id])
}

export function insertBook(category_id:number, title:string, author:string, price:number) {
    return modifyQ('INSERT INTO Books (category_id, title, author, price) VALUE (?, ?, ?, ?)', [category_id, title, author, price])
}

export function updateBook(category_id:number, title:string, author:string, price:number, id:number) {
    return modifyQ('UPDATE Books SET category_id = ?, title = ?, author = ?, price = ? WHERE id = ?', [category_id, title, author, price, id])

}

export function deleteBook(id:number) {
    return modifyQ('DELETE FROM Books WHERE id = ?', [id])
}