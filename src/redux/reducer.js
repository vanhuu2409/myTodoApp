const initState = {
  filter: {
    category: 'All'
  },
  todoList: [
    {
      id: 1,
      name: "Get a new helmet",
      completed: false,
      category: "Uncategoriezed",
    },
    {
      id: 2,
      name: "Purchase Milk & Corn Flakes",
      completed: false,
      category: "Groceries",
    },
    { id: 3, name: "Pay mortgage", completed: false, category: "Payments" },
    {
      id: 4,
      name: "Complete Assignments",
      completed: false,
      category: "College",
    },
    {
      id: 5,
      name: "Replace laptop’s screen",
      completed: false,
      category: "Uncategoriezed",
    },
  ],
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
        todoList: state.todoList.filter((todo) => (todo.id !== (action.payload))),
      };
    }case "todoList/changeStatus": {
      return {
        ...state,
        todoList: state.todoList.map((todo) => todo.id === action.payload ? {
          ...todo,
          completed: !todo.completed
        } : todo),
      };
    }
    case 'filter/filterCategoryTodo': {
      return {
        ...state,
        filter: {
          category: action.payload
        }
      }
    }
    default:
      return state;
  }
};
