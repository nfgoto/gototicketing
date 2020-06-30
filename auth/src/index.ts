import mongoose from "mongoose";
import { app } from "./app";

const PORT = process.env.PORT || 3000;

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  console.log(`updatesd ${new Date().toISOString()}`);
  try {
    await mongoose.connect("mongodb://auth-mongo-clusterip-svc:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Auth service connected to MongoDB");
  } catch (error) {
    console.error(error);
  }

  app.listen(PORT, () => {
    console.log(`Auth service listening on port ${PORT}`);
  });
};

start();
