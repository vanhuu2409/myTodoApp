const initState = {
  filter: {
    category: "All",
  },
  todoList: [],
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo": {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case "todoList/removeTodo": {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    }
    case "todoList/changeStatus": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        ),
      };
    }
    case "todoList/changeTodoName": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                name: action.payload.newName,
              }
            : todo
        ),
      };
    }
    case "filter/filterCategoryTodo": {
      return {
        ...state,
        filter: {
          category: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
