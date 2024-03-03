export const addTodo = (newTodo) => {
  return {
    type: "todoList/addTodo",
    payload: newTodo,
  };
};
export const onChangeStatusTodo = (elementInfo) => {
  return {
    type: "todoList/onChangeStatusTodo",
    payload: elementInfo,
  };
};
export const removeTodo = (element) => {
  return {
    type: "todoList/removeTodo",
    payload: element,
  };
};
