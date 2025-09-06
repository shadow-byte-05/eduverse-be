// src/routes/roadmap.routes.js
import { Router } from "express";
import { getRoadmap } from "../controllers/roadmap.controller.js";

const router = Router();
router.route("/generate").get(getRoadmap);

export default router;