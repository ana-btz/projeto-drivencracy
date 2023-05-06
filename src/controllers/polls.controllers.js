import dayjs from "dayjs";
import { pollsCollection } from "../database/db.js";

export async function createPoll(req, res) {
  const { title, expireAt } = req.body;
  let defaultValue = "";

  if (!expireAt) {
    const now = dayjs();
    defaultValue = now.add(30, "day").format("YYYY-MM-DD HH:mm");
    console.log(defaultValue);
  }

  try {
    const poll = { title, expireAt: expireAt || defaultValue };
    await pollsCollection.insertOne(poll);

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getAllPolls(req, res) {
  try {
    const polls = await pollsCollection.find().toArray();
    res.send(polls);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
