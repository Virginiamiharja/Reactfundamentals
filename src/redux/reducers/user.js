const init_state = {
  id: 0,
  username: "",
  fullName: "",
  role: "",
  testing: "",
  testing2: "",
  errMsg: "Test",
  isLoggedIn: false
};

export default (state = init_state, action) => {
  if (action.type == "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  }
  // else if (action.type == "TESTING") {
  //   return { ...state, testing: action.payload };
  // } else if (action.type == "TESTING2") {
  //   return { ...state, testing2: action.payload };
  // }
  else if (action.type == "ON_LOGIN_SUCCESS") {
    const { username, fullName, role, id } = action.payload;
    return { ...state, username, fullName, role, id, isLoggedIn: true };
  } else if (action.type == "ON_LOGIN_FAIL") {
    return { ...state, errMsg: action.payload };
  } else if (action.type == "ON_REGISTER_SUCCESS") {
    const { username, fullName, role, id } = action.payload;
    return { ...state, username, fullName, role, id };
  } else if (action.type == "ON_REGISTER_FAILED") {
    return { ...state, errMsg: action.payload };
  } else if (action.type == "ON_LOGOUT") {
    const { username, fullName, role, id } = action.payload;
    return { ...state, username, fullName, role, id };
  } else {
    return { ...state };
  }
};
