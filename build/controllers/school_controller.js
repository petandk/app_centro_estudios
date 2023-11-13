var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { saveSchool } from "../model/saveSchool.js";
import { findSchools } from "../model/findSchools.js";
import { json } from "express";
export function postSchool(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield saveSchool({ name: req.body.name });
        if (result)
            res.status(200).send("INSERT completado con éxito.");
        else
            res.status(400).send("No se pudo hacer el INSERT");
    });
}
;
export function getSchools(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield findSchools();
        const resultJson = yield json(result);
        if (result)
            res.status(200).json(resultJson);
        else
            res.status(400).json({ "error": "No se pudo realizar la consulta" });
    });
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
