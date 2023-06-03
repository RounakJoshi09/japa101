import { db } from "@/helpers/api/db";
import jwtMiddleware from "./jwt-middleware";
import { errorHandler } from "./error-handler";
export {apiHandler}; 
const apiHandler = (handler) => {
  return async (req, res) => {
    console.log(req.method);
    let method =  req.method.toString();
    method = method.toLowerCase();
    if (!handler[method]) {
      return res.status(405).send(`Method ${req.method} not allowed`);
    }
    try {
        if(!db.isInitialized)
        {
            await db.initialize();
        }

         await jwtMiddleware(req,res);

        await handler[method](req, res);

    } catch (e) {
        return errorHandler(e,res);
    }
  };
};
