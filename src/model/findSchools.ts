import {db} from "../config.js";

export  function findSchools():any{
    const queryString: string = `SELECT * FROM school`;
    db.query(queryString,(error,result)=>{
        if(error){ return JSON.stringify(error);}
        else{ return JSON.stringify(result);}
    });
}
