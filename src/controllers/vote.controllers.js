import { ObjectId } from "mongodb";
import {
  choicesCollection,
  pollsCollection,
  votesCollection,
} from "../database/db.js";
import dayjs from "dayjs";

export async function submitVote(req, res) {
  const { id } = req.params;

  try {
    const choice = await choicesCollection.findOne({ _id: new ObjectId(id) });
    if (!choice) return res.status(404).send("Opção não encontrada");

    const poll = await pollsCollection.findOne({
      _id: new ObjectId(choice.pollId),
    });
    if (!poll) return res.status(404).send("Enquete não encontrada");

    const now = dayjs();
    if (now.isAfter(poll.expireAt)) return res.sendStatus(403);

    await votesCollection.insertOne({
      createdAt: now.format("YYYY-MM-DD HH:mm"),
      choiceId: id,
    });

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
