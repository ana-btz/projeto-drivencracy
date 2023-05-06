import dayjs from "dayjs";
import { choicesCollection, pollsCollection } from "../database/db.js";
import { ObjectId } from "mongodb";

export async function createChoice(req, res) {
  const { title, pollId } = req.body;

  try {
    const poll = await pollsCollection.findOne({ _id: new ObjectId(pollId) });
    if (!poll) return res.sendStatus(404);

    const titleAlreadyExists = await choicesCollection.findOne({ title });
    if (titleAlreadyExists) return res.sendStatus(409);

    const now = dayjs();
    const { expireAt } = poll;
    if (now.isAfter(expireAt)) return res.sendStatus(403);

    await choicesCollection.insertOne({ title, pollId });

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
