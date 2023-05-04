import { Router } from "express";
import pollsRouter from "./polls.routes.js";

const router = Router();
router.use(pollsRouter);

export default router;
