import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../redux/actions";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import Nav from "./Nav";
import {
  selectedCategorySelector,
  todoRemainingSelector,
} from "../../../redux/selectors";

function Page() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector || []);
  const selectedCategory = useSelector(selectedCategorySelector);
  const [todoName, setTodoName] = useState("");
  const handleOnChangeTodo = (e) => {
    setTodoName(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (todoName) {
        setTodoName("");
        const newTodo = {
          id: uuidv4(),
          name: todoName,
          category:
            selectedCategory.category === "All"
              ? "Uncategoriezed"
              : selectedCategory.category,
          completed: false,
        };
        dispatch(addTodo(newTodo));
      } else {
        alert("Please enter todo name");
      }
    }
  };

  return (
    <div className='bg-[#EA5959] w-full h-screen relative flex justify-center items-center'>
      <div className='w-[983px] h-[702px] flex z-20 bg-white rounded-lg drop-shadow-lg'>
        <article className='max-w-[200px] w-full h-full pt-20 flex justify-center border-r border-[#D8D8D8]'>
          <Nav />
        </article>
        <main className='flex gap-6 flex-col flex-1 mx-12 mt-8'>
          <h1 className="font-['Lato'] font-bold text-[31px] leading-[37.2px]">
            Add Tasks
          </h1>
          <div>
            <input
              type='text'
              value={todoName}
              onChange={handleOnChangeTodo}
              onKeyPress={handleKeyPress}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder={`Add a new task inside ‘${selectedCategory.category}’ category`}
            />
          </div>
          {/* List TODO */}
          <div className='flex flex-col gap-3'>
            {/* List TODO */}
            {/* list item */}
            {todoList.map((todo, index) => {
              return <Todo key={index + 1} {...todo} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
