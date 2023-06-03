import { expressjwt } from "express-jwt";
import getConfig from "next/config";
const {serverRuntimeConfig } = getConfig();


const jwtMiddleware = (req,res) =>{

    const middleware = expressjwt({
        secret: serverRuntimeConfig.secret,
        algorithms: ["HS256"],
        requestProperty: "auth",
    }).unless({
        path:[
            '/api/auth/signup'
        ]
    })
    return  util.promisify(middleware)(req,res);;
}

export default jwtMiddleware;
