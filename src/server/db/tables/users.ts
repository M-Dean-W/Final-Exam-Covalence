import { RowDataPacket } from "mysql2";
import { selectQ, modifyQ } from "../queryUtils";

export interface IUsersRow extends RowDataPacket {
    id:number;
    email:string;
    created_at:number;
}

export function findUser(column:string, value:string) {
    return selectQ<IUsersRow>('SELECT * FROM Users WHERE ?? = ?', [column, value])
}

export function addUser(newUser: { email:string, password: string}) {
    return modifyQ('INSERT INTO Users SET ?', newUser)
}

