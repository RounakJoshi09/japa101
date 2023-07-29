import  {userController } from "@/controllers/users";
import {apiHandler} from "@/helpers/api/api-handler";
import jwt from 'jsonwebtoken';
import { OAuth2Client } from "google-auth-library";
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
const fetchUser = async (req,res)  =>{

    try {
        const { authToken } = req.body;
        console.log(authToken);
        const decodedKey = jwt.decode(authToken,serverRuntimeConfig.secret);
        const{sub:id} = decodedKey;
        const user = await userController.find(id);
        return res.status(200).json({user});    
    } catch (error) {
        res.status(500).json({
            messgae:'Something Went Wrong'
        })
    }   
}
export default apiHandler({
    post: fetchUser,
})
