const { default: mongoose } = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["Frontend", "Backend", "FullStack"],
    },
    level: {
      type: String,
      required: true,
      enum: ["Junior", "Senior"],
    },
    position: {
      type: String,
      required: true,
      enum: [
        "Backend Developer",
        "Junior Frontend Developer",
        "Junior Backend Developer",
        "FSD",
      ],
    },
    language: {
      type: String,
      required: true,
      enum: ["Javascript", "Java", "C", "C++"],
    },
    contract: {
      type: String,
      required: true,
      enum: ["Full-Time", "Part-Time"],
    },
  },
  {
    versionKey: false,
  }
);

const JobModel = mongoose.model("product", jobSchema);

module.exports = {
  JobModel,
};
