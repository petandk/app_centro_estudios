import Express from "express";
import { routerSchool } from "./routerSchool.js";
const router = Express.Router();
router.use("/api/v1/schools", routerSchool);
export { router };
