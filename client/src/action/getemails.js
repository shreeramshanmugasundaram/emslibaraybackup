import * as api from "../api/index.js";

export const getemails = async (navigate) => {
  try {
    const result = await api
      .getemails()
      .then((response) => {
        if (response.status === 401) {
          localStorage.clear();
          navigate("/login");
        } else {
          return response.data;
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    return result;
  } catch (error) {
    console.log(error);
  }
};
