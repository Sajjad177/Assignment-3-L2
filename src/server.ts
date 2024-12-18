import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { Server } from "http";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.mongodbUrl as string);
    server = app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// This is two way to handle unhandled rejection and uncaught exception
process.on("unhandledRejection", (error) => {
  console.log("Unhandled Rejection", error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});

process.on("uncaughtException", (error) => {
  console.log("Unhandled Exception", error);
  process.exit(1);
});

