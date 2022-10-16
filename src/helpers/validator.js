import {messages} from "./messages";
export const fields = {
  first_name:"First Name",
  last_name:"Last Name",
  email:"Email"
}
const EmailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const addUserValidator = (user) => {
  const {first_name,last_name,email} = user;
  if(first_name.trim()===""){
    return {field:fields.first_name,message:messages.whiteSpaceError,error:true}
  }
  if(last_name.trim()===""){
    return {field:fields.last_name,message:messages.whiteSpaceError,error:true}
  }
  if(email.trim()===""){
    return {field:fields.email,message:messages.whiteSpaceError,error:true}
  }
  if(!isNaN(first_name)){
    return {field:fields.first_name,message:messages.numberUsageError ,error:true}
  }
    if(!isNaN(last_name)){
    return {field:fields.last_name,message:messages.numberUsageError ,error:true}
  }

  if(!EmailRegex.test(email) || EmailRegex.test(email)===false){
    return {field:fields.email,message:messages.emailValidError,error:true}
  }
  return {error:false};

}