import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// parser
app.use(express.json());

const corseOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corseOptions));

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
