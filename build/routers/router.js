import Express from "express";
import { saveSchool } from "../controllers/school_controller.js";
import { saveSubject } from "../controllers/subject_controller.js";
const router = Express.Router();
router.post("/school", saveSchool);
router.post("/subject", saveSubject);
export { router };
