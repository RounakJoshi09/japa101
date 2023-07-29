const { default: api } = require("@/helpers/fetchWrapper")
import  Cookies  from 'js-cookie';
const { url } = require("@/helpers/route")


const fetchUser = async ()=>{
    const token = Cookies.get('authToken');
    const user = await api.post(`${url.BASE_URL}${url.getUser}`,{authtoken:token});
    return user;
}

module.exports = {
    fetchUser
}