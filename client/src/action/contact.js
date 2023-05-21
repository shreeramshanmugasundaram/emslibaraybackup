import * as api from "../api/index.js";

export const contact = async (formData) => {
  try {
    await api
      .contact(formData)
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
