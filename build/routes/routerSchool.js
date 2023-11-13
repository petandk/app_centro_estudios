import Express from "express";
import { postSchool, getSchools } from "../controllers/school_controller.js";
const routerSchool = Express.Router();
routerSchool.post("/", postSchool);
routerSchool.get("/", getSchools);
export { routerSchool };
