import express from "express";
import { aiRecommendController } from "../controllers/ai.recommend.controller.ts";


const aiRecommendRoutes = express.Router();

aiRecommendRoutes.post("/recommendByAi",aiRecommendController)


export default aiRecommendRoutes;