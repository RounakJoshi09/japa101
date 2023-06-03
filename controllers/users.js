import { db } from "@/helpers/api/db";



const create = async (params) =>{

    const { email, firstName, lastName, photoUrl } = params;
    if (!db.isInitialized)
    await db.initialize();
    if(await db.User.findOne({ where: { email: params.email } })){ 
        throw new Error('Email already exists');
    }
    const user = new db.User({email,firstName,lastName,photoUrl});

    await user.save();

    return user;
}

export const userController = {
    create
}