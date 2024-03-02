const initState = {
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
        {id: 3, name: "Pay mortgage", completed: false, category: "Payments"},
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
                todoList: [...state.todoList, action.payload],
            };
        }
        case "todoList/removeTodo": {
            return {
                todoList: state.todoList.filter((todo) => todo !== action.payload),
            };
        }
        case "todoList/onChangeStatusTodo": {
            return {
                todoList: state.todoList.map(todo => {
                    return (todo === action.payload ? {
                        ...action.payload,
                        completed: !action.payload.completed
                    } : todo)
                }),
            };
        }
        // isSelected === 'All' ? "Uncategoriezed" : isSelected
        default:
            return state;
    }
};

