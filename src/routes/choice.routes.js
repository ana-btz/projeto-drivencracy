import { choiceSchema } from "../schemas/choice.schema.js";
import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.middleware.js";
import {
  createPollChoice,
  getPollChoices,
} from "../controllers/choice.controllers.js";

const choiceRouter = Router();

choiceRouter.post("/choice", validateSchema(choiceSchema), createPollChoice);
choiceRouter.get("/poll/:id/choice", getPollChoices);

export default choiceRouter;
