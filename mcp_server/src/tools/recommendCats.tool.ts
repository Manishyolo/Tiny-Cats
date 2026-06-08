import axios from "axios"
import { boolean } from "zod/v4"


export const recommedcatsTool = async(kidsFriendly : boolean ,apartmentFriendly : boolean)=>{
    try {
        const res = await axios.post("http://localhost:3000/api/cats/recommend",{
            kidsFriendly,apartmentFriendly
        })

        return res.data

    } catch (error) {
        
        console.log("error in recommencatsTool",error)
    }
}