// Ini namanya action creator, biar bisa digunain dimana2 gitu
// Bukan berarti mentang2 action dia todo trs dia masuknya ke todo reducer doang gt dia bisa dipake kok di reducer user
export const todoInputHandler = text => {
  return {
    type: "ON_CHANGE_TODO_INPUT",
    //   Value yang akan masuk kedalam reducernya
    payload: text
  };
};

export const todoAddHandler = todoItem => {
  return {
    type: "ON_ADD_TODO_INPUT",
    payload: todoItem
  };
};
