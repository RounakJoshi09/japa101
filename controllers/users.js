import { db } from "@/helpers/api/db";



const create = async (params) =>{

    const { email, firstName, lastName, photoUrl } = params;
    if (!db.isInitialized)
    await db.initialize();
    
    let user = await db.User.findOne({ where: { email: params.email } })
    if(user){ 
       return user;
    }
    else{
     user = new db.User({email,firstName,lastName,photoUrl});
     await user.save();
    }

    return user;
}

const findOrCreate = async (params) =>{
    const {email,firstName,lastName,photoUrl} = params;

    if (!db.isInitialized)
    await db.initialize();
    
    let user = await db.User.findOne({ where: { email: email } })
    if(user)
    { 
       return user;
    }
    else{
     user = new db.User({email,firstName,lastName,photoUrl});
     await user.save();
    }

    return user;

}
const find= async (id) =>{
    
    if (!db.isInitialized)
    await db.initialize();
    
    let user = await db.User.findOne({ where: { id: id } })
    if(user)
    { 
       return user;
    }
    else{
     return {};
    }

    

}

export const userController = {
    create,
    findOrCreate,
    find
}