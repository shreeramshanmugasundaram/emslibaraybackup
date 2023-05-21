import * as api from "../api/index.js";

export const emailsender = async (formData) => {
  try {
    await api
      .email(formData)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
