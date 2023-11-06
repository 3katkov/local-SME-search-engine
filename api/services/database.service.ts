// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables

export const collections: { SME?: mongoDB.Collection } = {};

// Initialize Connection

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.MONGO_URL
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const SMECollection: mongoDB.Collection = db.collection(
    process.env.COLLECTION_NAME
  );

  collections.SME = SMECollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${SMECollection.collectionName}`
  );
}
