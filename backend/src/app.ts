import express from "express"
import Catroute from "./routes/cat.routes.ts";
import aiRoutes from "./routes/ai.routes.ts";
import aiRecommendRoutes from "./routes/ai.recommend.route.ts";
import mcpRoute from "./routes/test-mcp.route.ts";

const app = express();


app.use(express.json())

app.use("/api/cats",Catroute);
app.use("/api/ai",aiRoutes);
app.use("/api/aiRecommend",aiRecommendRoutes);
app.use("/api/mcp",mcpRoute);


export default app