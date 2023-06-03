import  {userController } from "@/controllers/users";
import {apiHandler} from "@/helpers/api/api-handler";
const register = async (req,res)  =>{
    const user = await userController.create(req.body);
    return res.status(200).json(user);
}
export default apiHandler({
    post: register,
})
