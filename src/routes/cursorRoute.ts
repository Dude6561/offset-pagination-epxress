import { Router } from "express";
import { page } from "../controller/cursor";
const router = Router();
router.get("/cursor", page);
export default router;
