import Router from 'express'
import tokenCheck from '../../middlewares/tokenCheck'
import db from '../../db'

const router = Router()

router.get('/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const book = await db.books.getOneBook(id)
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message: 'Internal Server Erorr', error})
    }
})

router.get('/', async (req,res) => {
    try {
        const books = await db.books.getAllBooks()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message: 'Internal Server Erorr', error})
    }
})

router.post('/', tokenCheck, async (req,res) => {
    try {
        const {category_id, title, author, price} = req.body
        const bookResult = await db.books.insertBook(category_id,title,author,price || '')
        res.status(200).json({message: 'Book added!', id:bookResult.insertId})
    } catch (error) {
        res.status(500).json({message: 'Internal Server Erorr', error})
    }
})

router.put('/:id', tokenCheck, async (req,res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const {category_id, title, author, price} = req.body
        await db.books.updateBook(category_id,title,author,price,id)
        res.status(200).json({message: 'Book updated!'})
    } catch (error) {
        res.status(500).json({message: 'Internal Server Erorr', error})
    }
})

router.delete('/:id', tokenCheck, async (req,res) => {
    try {
        const id = parseInt(req.params.id, 10)
        await db.books.deleteBook(id)
        res.status(200).json({message: 'Book deleted sucessfully'})
    } catch (error) {
        res.status(500).json({message: 'Internal Server Erorr', error})
    }
})

export default router