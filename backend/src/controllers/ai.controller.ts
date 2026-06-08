import type { Request, Response } from "express";
import { genrateAiResponse } from "../services/gemini.service.ts";

export const aiAskController = async(req:Request,res:Response)=>{

          const prompt = req.body.prompt;
         const result = await genrateAiResponse(prompt)

         return res.status(200).json({
            success:true,
            message:"Ai response",
            data:result
         })

}