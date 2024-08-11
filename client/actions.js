import axios from 'axios'
import Cookies from 'js-cookie';


export const login=async(user,id)=>{
    try {

    const response = await axios.post(`http://localhost:8000/api/v1/${id}/login`, 
    user ,
    {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    }
);


if (response.headers['set-cookie']) {
   const cookiesFromResponse = response.headers['set-cookie'];

   cookiesFromResponse.forEach(cookie => {
       const [cookieName, cookieValue] = cookie.split(';')[0].split('=');
       Cookies.set(cookieName, cookieValue, { path: '/' , sameSite: 'None', secure: true });
   });
}
const userData = response.data[id];
console.log("user data", userData);
localStorage.setItem('user', JSON.stringify(userData));

return { status: true, user: userData.email};
} catch (error) {
console.log("error logging in", error);
alert(error)
return {status : false };
}
}