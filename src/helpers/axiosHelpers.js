import axios from "axios";

const apiRoot = process.env.REACT_APP_ROOT_API;
const adminAPI = apiRoot + "/admin";

export const postAdminUser = async (obj) => {
  try {
    const { data } = await axios.post(adminAPI, obj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
