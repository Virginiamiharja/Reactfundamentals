const init_state = {
  id: 0,
  username: "User"
};

export default (state = init_state, action) => {
  if (action.type == "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  } else {
    return { ...state };
  }
};
