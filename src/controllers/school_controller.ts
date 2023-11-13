import  Express  from "express"; 
import { saveSchool } from "../model/saveSchool.js";
import { findSchools } from "../model/findSchools.js";
import { json } from "express";


export async function postSchool(req:Express.Request, res: Express.Response):Promise<any> {
    const result:boolean = await saveSchool({name:req.body.name});
    if(result) res.status(200).send("INSERT completado con éxito.");
    else res.status(400).send("No se pudo hacer el INSERT");
};

export async function getSchools(req:Express.Request, res: Express.Response){
    const result: any = await findSchools();
    const resultJson:any = await json(result);
        if(result) res.status(200).json(resultJson);
        else res.status(400).json({"error":"No se pudo realizar la consulta"});
}
/*
export function getSchoolWithId(req:Express.Request, res: Express.Response):void{
    const queryString: string = `SELECT * FROM school WHERE id = ${req.params.id}`;
    db.query(queryString,(error,result)=>{
        if(error){
            res.send("No se pudo hacer el select");
        }
        res.json(result);
    });
}*/