import * as types from "./actionTypes";
import ecommerceUrl from "../services/AxiosURL";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const getUser = (SignIn) => ({
  type: types.GET_SINGLE_USER,
  payload: SignIn,
});

const userUpdated = () => ({
  type: types.UPDATE_USER,
});

export const loadUsers = () => {
  return function (dispatch) {
    ecommerceUrl
      .get("/SignIn")
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    ecommerceUrl
      .delete(`/SignIn/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (SignIn) => {
  return function (dispatch) {
    ecommerceUrl
      .post(`/SignIn`, SignIn)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    ecommerceUrl
      .get(`/SignIn/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (SignIn, id) => {
  return function (dispatch) {
    ecommerceUrl
      .put(`/SignIn/${id}`, SignIn)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userUpdated());
      })
      .catch((error) => console.log(error));
  };
};
