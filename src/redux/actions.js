export const addTodo = (newTodo) => {
  return {
    type: "todoList/addTodo",
    payload: newTodo,
  };
};

export const removeTodo = (id) => {
  return {
    type: "todoList/removeTodo",
    payload: id,
  };
};
export const changeStatus = (id) => {
  return {
    type: "todoList/changeStatus",
    payload: id,
  };
};

export const changeTodoName = (id, newName) => {
  return {
    type: "todoList/changeTodoName",
    payload: { id, newName },
  };
};
export const filterCategoryTodo = (category) => {
  return {
    type: "filter/filterCategoryTodo",
    payload: category,
  };
};
