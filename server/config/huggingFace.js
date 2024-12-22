import fetch from "node-fetch";

export async function summarizeText(text) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ inputs: text }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get summary from Hugging Face API");
  }

  const result = await response.json();
  return result[0]?.summary_text || "";
}
