import Express from "express";
import { showSchools } from "../controllers/school_controller.js";
const routerGetSchools = Express.Router();
routerGetSchools.get("/", showSchools);
export { routerGetSchools };
