import type { Request,Response } from "express";
import { getMcpClient } from "../services/testMcp.service.ts"
import { genrateAiResponse } from "../services/gemini.service.ts";

export const testMcpController= async (req:Request,res:Response)=>{
      const client = await getMcpClient();
      const tools = await client.listTools();

     const result = await client.callTool({
        name:"recommend_cats",
        arguments:{
            kidsFriendly:true,
            apartmentFriendly:true,
        }
     })

     const response = result;
     console.log(response)
  let prompt = ` read this data 
     ${response} and recommend me the best cats by you 
  `

  const Airesponse = await genrateAiResponse(prompt);


      return res.json({
          message:"success",
          data:Airesponse
      })
}