import express from 'express'
import {userMsgs} from '../Controllers/UserMsgController.js'

const router = express.Router();

router.post("/add",userMsgs)
export default router