import pool from "./connection";
import type { ResultSetHeader } from "mysql2";

export async function selectQ<T>(queryString: string, params?:any): Promise<Partial<T>[]> {
    const [results] = await pool.query(queryString, params)
    return results as T[]
}  

export async function modifyQ (queryString: string, params?:any): Promise<ResultSetHeader> {
    const [results] = await pool.query(queryString, params)
    return results as ResultSetHeader
}  