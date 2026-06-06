import mongoose from "mongoose";
import type { ICat } from "../types/cat.types.ts";
const catSchema = new mongoose.Schema<ICat>({
   name:{
    type:String,
    required:true
   },
    breed:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    kidsFriendly:{
        type:Boolean,
        required:true
    },
    apartmentFriendly:{
        type:Boolean,
        required:true
    },
    lifeSpan:{
        type:Number,
        required:true
    },
    energyLevel:{
        type:String,
        required:true
    },
    image:String,
    color:String,
},{
    timestamps:true
})

const catModel = mongoose.model("Cats",catSchema);

export default catModel;