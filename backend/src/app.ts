import express from "express"
import Catroute from "./routes/cat.routes.ts";
import aiRoutes from "./routes/ai.routes.ts";
import aiRecommendRoutes from "./routes/ai.recommend.route.ts";

const app = express();


app.use(express.json())

app.use("/api/cats",Catroute);
app.use("/api/ai",aiRoutes)
app.use("/api/aiRecommend",aiRecommendRoutes);


export default app