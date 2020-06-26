import { BASEURL } from "../helpers/BaseURL";

export const storeUser = (state) => {
  const configurationObject = {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  };

  return (dispatch) => {
    return fetch(BASEURL + "login", configurationObject)
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          throw new Error(json.error + " " + json.message);
        }
        localStorage.setItem("token", json.jwt);
        dispatch({
          type: "STORAGE_USER",
          payload: json.user,
        });
      });
  };
};

export const storeUsers = () => {};
