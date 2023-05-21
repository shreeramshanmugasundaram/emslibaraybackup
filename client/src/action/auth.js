import * as api from "../api/index.js";

export const auth = async (formData, navigate) => {
  try {
    console.log("inside");
    await api
      .auth(formData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("ews", JSON.stringify(response.data));
          navigate("/9970116791");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
