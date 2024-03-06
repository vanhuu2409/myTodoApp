import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import Nav from "./Nav";

import { addTodo } from "./reducerSlice/todoSlice";

function Page() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.todoList);
  const categorySelected = useSelector((state) => state.filter.filter);
  const todosData = todoList.filter((todo) => {
    if (categorySelected === "All") return true;
    return todo.category === categorySelected;
  });

  const [todoName, setTodoName] = useState("");
  const handleOnChangeTodo = (e) => {
    setTodoName(e.target.value);
  };
  const handleOnAddTodo = (e) => {
    if (todoName) {
      setTodoName("");
      const newTodo = {
        id: uuidv4(),
        name: todoName,
        category: categorySelected,
        completed: false,
      };
      console.log(newTodo);
      dispatch(addTodo(newTodo));
      setTimeout(() => alert("Add Todo successfully"));
    } else {
      alert("Please enter todo name");
    }
  };

  return (
    <div className='bg-[#EA5959] w-full relative h-screen flex justify-center items-center overflow-hidden visible'>
      <div className='max-w-[983px] w-full relative h-[702px] flex z-20 bg-white rounded-lg drop-shadow-lg'>
        <article className='max-w-[180px] w-full h-full pt-20 flex justify-center'>
          <Nav newCategory />
        </article>
        <main className='flex gap-6 flex-col flex-1 mx-12 my-8 border-l pl-8 divide-2 divide-[#D8D8D8]'>
          <h1 className="font-['Lato'] -ml-4 font-bold text-[31px] leading-[37.2px]">
            Add Tasks
          </h1>
          <div className='flex justify-center items-center gap-4 hover:opacity-85 cursor-pointer'>
            <input
              type='text'
              value={todoName}
              onChange={handleOnChangeTodo}
              onKeyDown={(e) => (e.code === "Enter" ? handleOnAddTodo() : "")}
              className='bg-gray-50 flex-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder={`Add a new task inside ‘${categorySelected}’ category`}
            />
            <select
              disabled
              value={categorySelected}
              onKeyDown={(e) => (e.code === "Enter" ? handleOnAddTodo() : "")}
              className='block px-2 w-1/3 text-gray-500 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer h-full border rounded-lg cursor-default'
            >
              <option value='All'>Uncategoriezed</option>
              <option value='Groceries'>Groceries</option>
              <option value='College'>College</option>
              <option value='Payments'>Payments</option>
            </select>
            <button
              type='button'
              onClick={handleOnAddTodo}
              className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
            >
              ADD
            </button>
          </div>
          {/* List TODO */}
          <div className='relative flex overflow-scroll visible flex-col gap-3'>
            {/* List TODO */}
            {/* list item */}
            {todosData.map((todo, index) => (
              <Todo key={index} {...todo} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
