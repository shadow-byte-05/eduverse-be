import { generateRoadmap } from "../services/gemini.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const getRoadmap = asyncHandler(async (req, res) => {
  const { role } = req.query;

  if (!role || !role.trim()) {
    throw new ApiError(400, "The 'role' query parameter is required and cannot be empty.");
  }

  console.log(`Generating roadmap for role: ${role}`);
  const roadmapData = await generateRoadmap(role);
  
  return res
    .status(200)
    .json(new ApiResponse(200, roadmapData, "Roadmap generated successfully"));
});

export { getRoadmap };