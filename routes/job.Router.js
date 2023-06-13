const express = require("express");
const { JobModel } = require("../models/job.Model");
const jobRouter = express.Router();

jobRouter.get("/", async (req, res) => {
  const query = {};
  const sorting = {};
  const { sort, order, role, limit, page } = req.query;
  if (sort) {
    if (order == "asc") {
      sorting[sort] = 1;
    }
    if (order == "desc") {
      sorting[sort] = -1;
    }
  }
  if (role) {
    query.role = { $in: role };
  }
  let lim = 10;
  if (limit) {
    lim = limit;
  }
  try {
    const data = await JobModel.find(query)
      .sort(sorting)
      .skip((page - 1) * lim)
      .limit(lim);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

jobRouter.post("/add-job", async (req, res) => {
  try {
    let application = await JobModel(req.body);
    //console.log(application);
    await application.save();
    res
      .status(200)
      .send({ msg: `Your application has been sucessfully sent.` });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { jobRouter };
