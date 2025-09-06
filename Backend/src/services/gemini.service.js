import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";
import ApiError from "../utils/ApiError.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateRoadmap(role) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are EduVerse AI, an expert career mentor. Your task is to generate a concise, structured learning roadmap for the role of a "${role}".

      RULES:
      1. Your entire response MUST be a single, valid JSON object.
      2. Do not include any introductory text, explanations, or markdown formatting like \`\`\`json or \`\`\`.
      3. The root of the JSON object must be a key named "roadmap".
      4. The "roadmap" key must contain an array of exactly 3 objects, representing the stages: "Beginner", "Intermediate", and "Advanced".
      5. Each stage object must have these keys:
          - "stage": A string (e.g., "Beginner").
          - "skills": An array of 3-4 string values listing the most important skills.
          - "resources": An array of objects, where each object has "name" and "url". Prioritize well-known, high-quality, FREE resources.
          - "project": A single, descriptive string for a hands-on project idea.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().trim();

    // 🧹 Clean unwanted markdown wrappers
    if (text.startsWith("```")) {
      text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    }

    return JSON.parse(text);
  } catch (error) {
    throw new ApiError(502, "Error communicating with the AI service.", [error.message]);
  }
}
