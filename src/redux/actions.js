export const addTodo = (newTodo) => {
    return {
        type: "todoList/addTodo",
        payload: newTodo
    };
};
export const onChangeStatusTodo = (element) => {
    return {
        type: "todoList/onChangeStatusTodo",
        payload: element,
    };
};
export const removeTodo = (element) => {
    return {
        type: "todoList/removeTodo",
        payload: element,
    };
};

