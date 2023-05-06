import { Router } from "express";
import { createChoice } from "../controllers/choice.controllers.js";
import { validateSchema } from "../middlewares/validate.schema.middleware.js";
import { choiceSchema } from "../schemas/choice.schema.js";

const choiceRouter = Router();

choiceRouter.post("/choice", validateSchema(choiceSchema), createChoice);

export default choiceRouter;
