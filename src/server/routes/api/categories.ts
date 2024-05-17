import Router from 'express'
import db from '../../db'


const router = Router()

router.get('/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const cats = await db.cat.getOneCategory(id)
        res.status(200).json(cats)
    } catch (error) {
        res.status(500).json({message: 'Internal Server Erorr', error})
    }
})

router.get('/', async (req,res) => {
    try {
        const cat = await db.cat.getAllCategories()
        res.status(200).json(cat)
    } catch (error) {
        res.status(500).json({message: 'Internal Server Erorr', error})
    }
})

export default router