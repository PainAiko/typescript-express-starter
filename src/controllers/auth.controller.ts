import { RequestHandler } from "express";

export const createNewUser:RequestHandler = (req,res) =>{
    res.send('OK')
}