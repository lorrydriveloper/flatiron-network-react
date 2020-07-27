import { BASEURL } from "../helpers/BaseURL";

const _userObject = (state) => ({
  user: {
    id: state.id,
    name: state.name,
    surname: state.surname,
    email: state.email,
    password: state.password,
    cohort_id: state.cohort_id,
  },
  location: {
    plus_code: state.plus_code,
    street: state.street,
    postcode: state.postcode,
    city: state.city,
    state: state.state,
    country: state.country,
    latitude: state.latitude,
    longitude: state.longitude,
  },
  social: {
    github: state.github,
    twitter: state.twitter,
    linkedIn: state.linkedIn,
    facebook: state.facebook,
    instagram: state.instagram,
    blog: state.blog,
    portfolio: state.portfolio,
  },
});

export const createUser = (state) => {
  let configurationObject = {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_userObject(state)),
  };
  return async (dispatch) => {
    const res = await fetch(BASEURL + "sign_up", configurationObject);
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    localStorage.setItem("token", json.jwt);
    dispatch({
      type: "CREATE_USER",
      payload: json.user,
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

  return async (dispatch) => {
    const res = await fetch(BASEURL + "login", configurationObject);
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    localStorage.setItem("token", json.jwt);
    dispatch({
      type: "STORAGE_USER",
      payload: json.user,
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
  return async (dispatch) => {
    const res = await fetch(BASEURL + "users", options);
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "STORAGE_USERS",
      payload: json,
    });
  };
};

export const filterUsers = (filters) => {
  return {
    type: "FILTER_USERS",
    payload: filters,
  };
};

export const updateUser = (state) => {
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(_userObject(state)),
  };

  return async (dispatch) => {
    const res = await fetch(BASEURL + `users/${state.id}`, options);
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "UPDATE_USER",
      payload: json.user,
    });
  };
};
