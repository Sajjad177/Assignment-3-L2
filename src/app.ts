import express, { Application, RequestHandler } from "express";
import cors from "cors";
import router from "./routers";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Application = express();

// parser
app.use(express.json());

const corseOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corseOptions));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(globalErrorHandler as unknown as RequestHandler);


export default app;
