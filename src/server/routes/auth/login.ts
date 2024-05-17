import Router from 'express'

const router = Router()

router.post('/', async (req,res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: 'Internal Server Erorr', error})
    }
})

export default router