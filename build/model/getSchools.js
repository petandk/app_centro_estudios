import { db } from "../config.js";
export function getSchools() {
    const queryString = "SELECT * FROM school";
    db.query(queryString, (error, result) => {
        if (error) {
            return JSON.stringify({ error: "Error en la consulta a la base de datos" });
        }
        return JSON.stringify(result);
    });
    return "";
}
