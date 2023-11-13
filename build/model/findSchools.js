import { db } from "../config.js";
export function findSchools() {
    const queryString = `SELECT * FROM school`;
    db.query(queryString, (error, result) => {
        if (error) {
            return JSON.stringify(error);
        }
        else {
            return JSON.stringify(result);
        }
    });
}
