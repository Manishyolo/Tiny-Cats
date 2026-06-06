import express from "express"
import { createCatController, getAllCatController, getSingleCatController, recommendCatController, searchCatController } from "../controllers/cat.controller.ts";

const Catroute = express.Router();


Catroute.post("/create",createCatController);
Catroute.get("/search/all",searchCatController);
Catroute.get("/",getAllCatController)
Catroute.get("/:id",getSingleCatController);
Catroute.post("/recommend",recommendCatController)

export default Catroute