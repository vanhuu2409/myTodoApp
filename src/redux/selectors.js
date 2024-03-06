import { createSelector } from "@reduxjs/toolkit";

export const selectedCategorySelector = (state) => state.filter;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  selectedCategorySelector,
  (todoList, category) => {
    return todoList.filter((todo) => {
      if (category.category === "All") return true;
      return todo.category === category.category;
    });
  }
);
