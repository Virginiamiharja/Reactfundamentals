// Ini tuh sama kaya state tapi ini available untuk semua component kalo biasanya kan kita bikin state itu local
// Trs reducers itu gunanya untuk gonta ganti state gitu
const init_state = {
  todoInput: "",
  todoList: []
};

// Si statenya kita kasih default value
export default (state = init_state, action) => {
  if (action.type == "ON_CHANGE_TODO_INPUT") {
    return { ...state, todoInput: action.payload };
  } else if (action.type == "ON_ADD_TODO_INPUT") {
    return {
      ...state,
      todoList: [...state.todoList, action.payload]
    };
  } else {
    return { ...state };
  }
};
