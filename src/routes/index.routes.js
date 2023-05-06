import { Router } from "express";
import pollsRouter from "./polls.routes.js";
import choiceRouter from "./choice.routes.js";

const router = Router();
router.use(pollsRouter);
router.use(choiceRouter);

export default router;
