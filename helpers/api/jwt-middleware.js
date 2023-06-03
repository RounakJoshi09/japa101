import { expressjwt } from "express-jwt";
import getConfig from "next/config";
import util from 'util';
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
