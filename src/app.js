import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import { getAllJobs } from "./controllers/AllJob-controller.js";
dotenv.config();

connect();

const app = express();

app.use(express.json());

app.use("/images", express.static("./public/logos"));

app.get("/jobs/:size/:page", getAllJobs);

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});

export default app;
