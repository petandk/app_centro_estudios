import  Express  from "express";

export function saveSchool(req:Express.Request, res: Express.Response):void {
    res.send(req.body);
};