import { FiCheckSquare } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  changeCategory,
  changeStatus,
  changeTodoName,
  removeTodo,
} from "./reducerSlice/todoSlice";

const Todo = ({ id, name, category, completed }) => {
  const dispatch = useDispatch();

  const [isChangeTodoName, setIsChangeTodoName] = useState(false);
  const [newCategory, setNewCategory] = useState(category);

  const handleDeleteTodo = (e) => {
    let onClickDelete = window.confirm(
      `Are you sure you want to delete this todo?`
    );
    if (onClickDelete) {
      dispatch(removeTodo(id));
      alert("Successfully removed");
    }
  };

  const handleOnClickChangeStatus = () => {
    dispatch(changeStatus(id));
  };

  const handleToggleEditTodo = () => {
    setIsChangeTodoName(!isChangeTodoName);
    if (isChangeTodoName) {
      alert("Successfully changed");
      dispatch(changeCategory(id, newCategory));
      setIsChangeTodoName(!isChangeTodoName);
    }
  };

  const handleChangeTodoName = (e) => {
    const newName = e.target.value;
    dispatch(changeTodoName(id, newName));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsChangeTodoName(!isChangeTodoName);
      dispatch(changeCategory(id, newCategory));
      setTimeout(() => alert("Change category successfully"));
    }
  };

  const handleOnChangeCategory = (e) => {
    setNewCategory(e.target.value);
  };

  return (
    <div className='flex relative items-center group'>
      <div className='flex flex-1 gap-4 items-center hover:opacity-85 cursor-pointer'>
        <input
          type='checkbox'
          id={id}
          checked={completed}
          onChange={handleOnClickChangeStatus}
          className='w-6 h-6 border-[#EA5959] rounded cursor-pointer accent-[#EA5959]'
        />
        {!isChangeTodoName ? (
          <>
            <label
              htmlFor={id}
              className='relative text-[18px] cursor-pointer text-[#5A5A5A] font-["Lato"] leading-[21.6px]'
            >
              {name}
              <span className='min-w-[90px] cursor-pointer py-[4px] px-3 ml-2 font-thin font-["Lato"] text-[12px] leading-[14.4px] h-[14px] rounded-md bg-[#EA5959] text-white text-center'>
                {category}
              </span>
              {completed && (
                <div className='absolute left-0 top-1/2 w-full h-[1px] bg-[#5A5A5A]'></div>
              )}
            </label>
          </>
        ) : (
          <>
            <input
              type='text'
              onChange={handleChangeTodoName}
              onKeyDown={handleKeyPress}
              value={name}
              className='w-full h-full p-2 border rounded cursor-text accent-[#EA5959]'
            />
            <select
              onChange={handleOnChangeCategory}
              onKeyDown={handleKeyPress}
              value={newCategory}
              className='block px-2 py-[5px] w-1/3 text-gray-500 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer h-full border rounded cursor-pointer accent-[#EA5959]'
            >
              <option value='Uncategoriezed'>Uncategoriezed</option>
              <option value='Groceries'>Groceries</option>
              <option value='College'>College</option>
              <option value='Payments'>Payments</option>
            </select>
          </>
        )}
      </div>

      {/* DeleteBTN */}
      <div className='flex opacity-0 group-hover:opacity-100'>
        <button
          className='hover:opacity-80 cursor-pointer flex justify-center items-center z-20 w-10 h-10'
          onClick={handleToggleEditTodo}
        >
          {isChangeTodoName ? (
            <FiCheckSquare className='text-xl z-0 text-info-emphasis mx-2' />
          ) : (
            <HiOutlinePencilAlt className='text-xl z-0 text-info-emphasis mx-2' />
          )}
        </button>
        <button
          className='hover:opacity-80 cursor-pointer flex justify-center items-center z-20 w-10 h-10'
          onClick={handleDeleteTodo}
        >
          <RiDeleteBin6Line className='text-xl z-0 text-[#EA5959] mx-2' />
        </button>
      </div>
    </div>
  );
};

export default Todo;
