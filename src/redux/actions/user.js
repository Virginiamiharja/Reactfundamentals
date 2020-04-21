export const usernameHandler = newUsername => {
  return {
    type: "ON_CHANGE_USERNAME",
    payload: newUsername
  };
};
