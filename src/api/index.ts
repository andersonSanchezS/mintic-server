
import { Router } from 'express'
import UserRouter from './auth'

const router = Router()

router.use('/auth', UserRouter)

export default router