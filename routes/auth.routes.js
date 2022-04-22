import {Router} from 'express'
import bcrypt from 'bcryptjs'
import config from "config"
import jwt from 'jsonwebtoken'
import {check, validationResult} from "express-validator";
import User from '../models/User.js'

const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('nick', 'Minimum length 3 characters').isLength({ min: 3 }),
        check('password', 'Minimum length 6 characters').isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) return res.status(400).json({errors: errors.array(), message: 'Incorrect data'})

        const {email, nick, password} = req.body

        const candidateFirst = await User.findOne({ email })
        if (candidateFirst) return res.status(400).json({ message: 'Email already exist' })

        const candidateSecond = await User.findOne({ nick })
        if (candidateSecond) return res.status(400).json({ message: 'Nick already exist' })

        const hashedPassword = await bcrypt.hash(password, 13)
        const user = new User({email, nick, password: hashedPassword })

        await user.save()

        res.status(201).json({ message: 'User created' })

    } catch (e) {
        res.status(500).json({ message: 'Register error' })
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Incorrect email').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) return res.status(400).json({errors: errors.array(), message: 'Incorrect login data'})

        const {email, password} = req.body

        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({ message: 'User is not found' })

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) return res.status(400).json({ message: 'Incorrect password'})

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            {expiresIn: '1h' }
        )

        res.json({ token, userId: user.id })

    } catch (e) {
        res.status(500).json({ message: 'Server router error' })
    }
})

export default router
