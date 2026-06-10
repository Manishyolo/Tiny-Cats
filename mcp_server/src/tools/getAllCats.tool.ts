import axios from "axios"
import { boolean } from "zod/v4"


export const getAllCatsTool = async()=>{
    try {
        const res = await axios.get("http://localhost:3000/api/cats/",)

        return res.data

    } catch (error) {
        
        console.log("error in getallcatstool",error)
    }
}