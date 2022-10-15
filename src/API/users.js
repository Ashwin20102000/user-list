import { httpRequest } from "./httpRequest";
import {keys } from "../utils/keys" 
const getUsers = async() => {
  try {
    const response = await httpRequest({
      baseUrl:keys.usersApi,
      method:'GET',
    })
    if (response.status >= 200 && response.status < 300) {
      const returnData = response.data;
      return returnData.data;
    }
  } catch (error) {
    console.log('error', error)
  }
}


const usersService  = {
  getUsers,
}

export default usersService;