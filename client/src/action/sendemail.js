import * as api from "../api/index.js";

export const sendemail = async (formData, setPopup) => {
  try {
    await api
      .sendemail(formData)
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
