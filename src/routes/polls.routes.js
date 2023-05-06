import { createPoll, getAllPolls } from "../controllers/polls.controllers.js";
import { pollSchema } from "../schemas/poll.schema.js";
import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.middleware.js";

const pollsRouter = Router();

pollsRouter.post("/poll", validateSchema(pollSchema), createPoll);
pollsRouter.get("/poll", getAllPolls);

export default pollsRouter;
