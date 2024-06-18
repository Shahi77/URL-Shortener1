import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
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

app.get("/welcome", (req, res) => {
  res.send("<h1>Welcome to URL-Shortener API</h1>");
});
// import ROUTERS
import v1 from "./routes/version1.routes.js";
app.use("/v1", v1);

export default app;
