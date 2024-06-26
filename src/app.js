import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import v1 from "./routes/version1.routes.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to URL-Shortener API</h1><br><h2>Visit <a href='https://shahi77.github.io/URL-Shortener1/' target='_blank'>https://shahi77.github.io/URL-Shortener1/</a> to get more info on API calls available</h2>"
  );
});

app.use("/v1", v1);

export default app;
