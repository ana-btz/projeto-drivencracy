import { ObjectId } from "mongodb";
import {
  choicesCollection,
  pollsCollection,
  votesCollection,
} from "../database/db.js";

export async function getResult(req, res) {
  const { id } = req.params;
  console.log(`id: ${id}`);

  try {
    const poll = await pollsCollection.findOne({ _id: new ObjectId(id) });
    if (!poll) return res.sendStatus(404);

    const choices = await choicesCollection.find({ pollId: id }).toArray();
    console.log(`choices: ${choices}`);

    let title = "";
    let votes = 0;

    for (const choice of choices) {
      console.log(`choice: ${choice.title}`);
      const votesList = await votesCollection
        .find({ choiceId: new ObjectId(choice._id) })
        .toArray();
      console.log(`votos: ${votesList.length}`);
      if (votes < votesList.length) {
        votes = votesList.length;
        title = choice.title;
      }
    }

    const result = { title, votes };
    res.status(200).send({ ...poll, result });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
