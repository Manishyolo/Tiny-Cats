import express from "express";

const mcpRoute = express.Router();

mcpRoute.get("/test-mcp");

export default mcpRoute;