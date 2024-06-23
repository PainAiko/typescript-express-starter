import { RequestHandler } from "express";

export const createNewUser:RequestHandler = (req,res) =>{
    console.log(req.body);
    res.send('OK')
}