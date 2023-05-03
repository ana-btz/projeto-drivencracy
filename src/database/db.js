import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);
try {
  await mongoClient.connect();
  console.log("Conectado com Mongodb");
} catch (error) {
  console.log(error.message);
}
export const db = mongoClient.db();

// export const pollsCollection = db.collection("polls");
// export const choicesCollection = db.collection("choices");
// export const votesCollection = db.collection("votes");
