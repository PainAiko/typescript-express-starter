import { Router } from "express";
import { createNewUser } from "@controllers/auth.controller";
const AuthRouter = Router()

AuthRouter.post('/sign-up',createNewUser)
AuthRouter.post('/sign-ip')
AuthRouter.post('/verify')
AuthRouter.post('/refresh-token')
export default AuthRouter