import express from "express";
import { testMcpController } from "../controllers/test-mcp.controller.ts";

const mcpRoute = express.Router();

mcpRoute.get("/test-mcp",testMcpController);

export default mcpRoute;