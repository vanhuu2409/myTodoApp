import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(state);
      state.todoList.shift(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    changeStatus: (state, action) => {
      const currentTodo = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
    changeTodoName: (state, action) => {
      const currentTodo = state.todoList.find(
        (todo) => todo.id === action.payload.id
      );
      if (currentTodo) {
        currentTodo.name = action.payload.newName;
      }
    },
    changeCategory: (state, action) => {
      const currentTodo = state.todoList.find(
        (todo) => todo.id === action.payload.id
      );
      if (currentTodo) {
        currentTodo.category = action.payload.newCategory;
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  changeStatus,
  changeTodoName,
  changeCategory,
} = counterSlice.actions;
export default counterSlice.reducer;
