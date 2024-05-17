import { RowDataPacket } from "mysql2";
import { selectQ, modifyQ } from "../queryUtils";

export interface ICategoriesRow extends RowDataPacket {
    id:number;
    name:string;
}

export function getAllCategories() {
    return selectQ<ICategoriesRow>('SELECT * FROM Categories')
}

export function getOneCategory(id:number) {
    return selectQ<ICategoriesRow>('SELECT * FROM Categories WHERE id = ?', [id])
}

