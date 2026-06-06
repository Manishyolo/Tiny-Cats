import express from "express"
import Catroute from "./routes/cat.routes.ts";

const app = express();


app.use(express.json())

app.use("/api/cats/",Catroute);


export default app