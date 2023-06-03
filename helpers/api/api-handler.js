import { db } from "@/helpers/api/db";
import jwtMiddleware from "./jwt-middleware";

const apiHandler = (handler) => {
  return async (req, res) => {
    const method = req.method.toLowercase();
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
      res.status(500).send(e);
    }
  };
};
