import {Router} from "express"
import Count from '../models/CountSchema.js'

const router = Router()

// /api/count/add
router.post('/add', async (req, res) => {
    try {

        const {count} = req.body

        const count_s = new Count({count: 100})

        await count_s.save()

        res.status(201).json({ message: 'Count added' })

    } catch (e) {
        res.status(500).json({ message: 'Server router error' })
    }
})

export default router
