import catModel from "../models/cat.model.ts"

export const createCatService = async(payload:object)=>{
   return await catModel.create(payload);
}

export const getAllCatService = async()=>{
    return await catModel.find();
}

export const getSingleCatservice = async(id:string)=>{
    return await catModel.findById({id})
}

export const searchCatService = async(query:string)=>{

    return await catModel.find({
        $or:[
            {

               name:{
                  $regex:query,
                $options:"i",
                }
                
            },{
                 breed:{
                  $regex:query,
                $options:"i",
                }
            }
            
        ]
    })

}

export const recommendCatService = async(kidsFriendly:boolean,apartmentFriendly:boolean)=>{
    return await catModel.find({
        kidsFriendly,
        apartmentFriendly
    })
   
}