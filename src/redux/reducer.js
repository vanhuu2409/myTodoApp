import { combineReducers } from "redux";
import filterSlice from "../components/views/home/reducerSlice/filterSlice";
import todoSlice from "../components/views/home/reducerSlice/todoSlice";

const reducer = combineReducers({
  filter: filterSlice,
  todoList: todoSlice,
});

export default reducer;
