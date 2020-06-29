import { BASEURL } from "../helpers/BaseURL";

export const createUser = (state) => {
  let configurationObject = {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: {
        name: state.name,
        surname: state.surname,
        email: state.email,
        password: state.password,
        cohort_id: state.cohort_id,
      },
      location: {
        plus_code: state.plus_code,
        street: state.street,
        postalcode: state.postalcode,
        city: state.city,
        state: state.state,
        country: state.country,
      },
    }),
  };
  return (dispatch) => {
    return fetch(BASEURL + "sign_up", configurationObject)
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          throw new Error(json.error + " " + json.message);
        }
        localStorage.setItem("token", json.jwt);
        dispatch({
          type: "CREATE_USER",
          payload: json.user,
        });
      });
  };
};

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
        debugger;
        dispatch({
          type: "STORAGE_USER",
          payload: json.user,
        });
      });
  };
};

export const storeUsers = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return (dispatch) => {
    return fetch(BASEURL + "users", options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.error) {
          throw new Error(json.error + " " + json.message);
        }
        dispatch({
          type: "STORAGE_USERS",
          payload: json,
        });
      });
  };
};
