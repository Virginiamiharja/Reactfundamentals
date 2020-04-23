import { API_URL } from "../../constants/API";
import Axios from "axios";
import swal from "sweetalert";

export const usernameHandler = newUsername => {
  return {
    type: "ON_CHANGE_USERNAME",
    payload: newUsername
  };
};

export const loginHandler = userData => {
  // Dispatch ini berasal dari redux thunk
  return dispatch => {
    // Supaya pas function kepanggil itu dia gabakal berhenti, dispatch ini sama kaya action creator
    // Dia ngirim ke reducer tapi dia gabakal berhentiin functionnya
    // dispatch({
    //   type: "TESTING",
    //   payload: "Hello World"
    // });

    // dispatch({
    //   type: "TESTING2",
    //   payload: "Halo Dunia"
    // });
    const { username, password } = userData;
    Axios.get(`${API_URL}/users`, {
      params: {
        username: username,
        password
      }
    })
      .then(res => {
        console.log(res);
        if (res.data.length > 0) {
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0]
          });
        } else {
          swal("Oops", "Wrong username or password", "error");
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "Username atau password salah"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const registerHandler = userData => {
  return dispatch => {
    const { username, fullName, password, role } = userData;
    Axios.get(`${API_URL}/users`, {
      params: {
        username
      }
    })
      .then(res => {
        console.log(res);
        if (res.data.length > 0) {
          swal("Oops", "Username must be unique", "error");
          dispatch({
            type: "ON_REGISTER_FAILED",
            payload: "Username sudah ada"
          });
        } else {
          dispatch({
            type: "ON_REGISTER_SUCCESS",
            payload: userData
          });
          Axios.post(`${API_URL}/users`, {
            username,
            fullName,
            password,
            role
          })
            .then(res => {
              swal("Welcome", "Thank you for registration", "success");
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const userKeepLogin = userData => {
  return dispatch => {
    Axios.get(`${API_URL}/users`, {
      params: {
        id: userData.id
      }
    })
      .then(res => {
        console.log(res);
        if (res.data.length > 0) {
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0]
          });
        } else {
          alert("Masuk");
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "Wrong username or password"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const logoutHandler = userData => {
  return dispatch => {
    dispatch({
      type: "ON_LOGOUT",
      payload: userData
    });
  };
};
