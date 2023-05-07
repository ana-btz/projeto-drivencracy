import { Router } from "express";
import pollsRouter from "./polls.routes.js";
import choiceRouter from "./choice.routes.js";
import voteRouter from "./vote.routes.js";

const router = Router();
router.use(pollsRouter);
router.use(choiceRouter);
router.use(voteRouter);

export default router;
