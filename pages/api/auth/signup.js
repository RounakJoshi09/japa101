import  {userController } from "@/controllers/users";
import {apiHandler} from "@/helpers/api/api-handler";
import jwt from 'jsonwebtoken';
import { OAuth2Client } from "google-auth-library";
const register = async (req,res)  =>{

    try {
        const { credential } = req.body;
    const verificationResponse = await verifyToken(credential);
    if(verificationResponse.error)
    {
        return res.status(400).json({
            message:verificationResponse.error
        });

    }

    const userProfile =  verificationResponse.payload;
    const {name, given_name:firstName,family_name:lastName,email,picture } = userProfile;
    

    const user = await userController.findOrCreate({firstName,lastName,email,photoUrl:picture});
    const token = jwt.sign({ sub: user.id }, process.env.SECRET, { expiresIn: '30d' });

    return res.status(200).json({user,token});    
    } catch (error) {
        res.status(500).json({
            messgae:'Something Went Wrong'
        })
    }

    
}
const GoogleClientId = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GoogleClientId);
const verifyToken = async (token) =>{
    try {
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: GoogleClientId,
        });
        return { payload: ticket.getPayload() };
      } catch (error) {
        return { error: "Invalid user detected. Please try again" };
      }
}



export default apiHandler({
    post: register,
})
