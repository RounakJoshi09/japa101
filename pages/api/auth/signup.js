import  {userController } from "@/controllers/users";

export default async function handler(req, res)  {
    if (req.method === 'POST') {
        console.log(req.body);
        const user = await userController.create(req.body); 
        res.status(200).json(user); 
    } else {
   
    }
  }