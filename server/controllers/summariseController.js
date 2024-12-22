import { summarizeText } from "../config/huggingFace.js";
import summaryModel from "../models/summaryModel.js";

export const summarizeTextController = async (req, res) => {
  try {
    const { text } = req.body;
    const { userId } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const summary = await summarizeText(text);

    const newSummary = await summaryModel.create({
      userId,
      originalText: text,
      summarizedText: summary,
    });

    res.json(newSummary);
  } catch (error) {
    console.error("Summarization error:", error);
    res.status(500).json({ error: "Failed to summarize text" });
  }
};

export const getSummariesController = async (req, res) => {
  try {
    const { userId } = req.body;
    const summaries = await summaryModel.find({ userId });
    console.log("summaries", summaries);
    return res.json({ success: true, summaries });
  } catch (error) {
    console.error("Error fetching summaries:", error);
    res.status(500).json({ error: "Failed to fetch summaries" });
  }
};
