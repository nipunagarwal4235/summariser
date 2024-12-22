import mongoose from "mongoose";

const summarySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  originalText: {
    type: String,
    required: true,
  },
  summarizedText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const summaryModel = mongoose.model("summary", summarySchema);

export default summaryModel;
