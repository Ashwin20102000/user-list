/* eslint-disable no-throw-literal */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import axios from "axios";

export const httpRequest = async ({
  baseURL,
  method,
  body = {},
}) => {
  try {
    const response = await axios.request({
      method,
      url:baseURL,
      data: body,
      headers: {
        "Content-Type":  "application/json",
      },
    });
    console.log('response', response)
    return response;
  } catch (error) {
    throw {
      success: false,
      message:  "Internal Server Error, Please try again",
      status: error || 500,
    };
  }
};