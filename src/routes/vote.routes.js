import { Router } from "express";
import { submitVote } from "../controllers/vote.controllers.js";

const voteRouter = Router();

voteRouter.post("/choice/:id/vote", submitVote);

export default voteRouter;
