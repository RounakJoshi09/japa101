const { default: api } = require("@/helpers/fetchWrapper")
import  Cookies  from 'js-cookie';
const { url } = require("@/helpers/route")


const fetchUser = async (setUser)=>{
    try {
        const token = Cookies.get('authToken');
        const user = await api.post(`${url.BASE_URL}${url.getUser}`,{authToken:token});
        setUser(user);
        
    } catch (error) {
        console.log(error);
        setUser({});        
    }
}

module.exports = {
    fetchUser
}