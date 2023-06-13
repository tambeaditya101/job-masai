const express = require("express");
const { connection } = require("./db");
const { jobRouter } = require("./routes/job.Router");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/jobs", jobRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to the db");
  } catch (error) {
    console.log(error);
    console.log("failed to connect");
  }
  console.log(`server is running on port ${process.env.PORT}`);
});
