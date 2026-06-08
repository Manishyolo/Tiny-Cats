import express from "express";
import { aiAskController } from "../controllers/ai.controller.ts";

const aiRoutes = express.Router();

aiRoutes.post("/ask",aiAskController)


export default aiRoutes;