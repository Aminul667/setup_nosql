import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

const app: Application = express();

//parsers
app.use(express.json());
// app.use(cookieParser());

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

// application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hi Next Level Developer !");
});

// app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

export default app;

// ! see: 11-9, 11-10 and so on
