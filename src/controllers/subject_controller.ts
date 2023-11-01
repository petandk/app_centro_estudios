import  Express  from "express";

export function saveSubject(req:Express.Request, res: Express.Response):void {
    res.send(req.body);
};