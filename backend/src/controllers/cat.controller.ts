import type { Request, Response } from "express";
import { createCatService, getAllCatService, getSingleCatservice, searchCatService ,recommendCatService} from "../services/cat.service.ts";

export const createCatController = async(req:Request,res:Response)=>{
    const result = await createCatService(req.body);

    return res.status(201).json({
        success:true,
        message:"cat created successfully",
        data:result
    })
}

export const getAllCatController = async(req:Request,res:Response)=>{
           const result = await getAllCatService();

           return res.status(200).json({
            success:true,
            message:"all cats feteched",
            data:result
           })
}

export const getSingleCatController = async(req:Request,res:Response)=>{
              const id = req.params.id as string
              const result = await getSingleCatservice(id)

               return res.status(200).json({
            success:true,
            message:" cat feteched",
            data:result
           })

}

export const searchCatController = async(req:Request,res:Response)=>{
              const q = req.query.q as string
              const result = await searchCatService(q)

               return res.status(200).json({
            success:true,
            message:" cat feteched",
            data:result
           })

}


export const recommendCatController = async(req:Request,res:Response)=>{
              const {kidsFriendly,apartmentFriendly}= req.body

              const result = await recommendCatService(kidsFriendly,apartmentFriendly)

               return res.status(200).json({
            success:true,
            message:" cat feteched",
            data:result
           })

}