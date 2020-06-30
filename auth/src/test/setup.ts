import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";

// hook function to setup an in-memory mongo instance before all tests start executing
let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "thisisnotabestpractice";
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
});

// reset all data before running each test
beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (const collection of collections) {
    await collection.deleteMany({});
  }
});

// stop mongo and close mongoose connection
afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
