import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  changeStatus,
  changeTodoName,
  removeTodo,
} from "../../../redux/actions";
import { useState } from "react";

const Todo = (props) => {
  const { id, name, category, completed } = props;
  const dispatch = useDispatch();

  const handleDeleteTodo = (e) => {
    let onClickDelete = window.confirm(
      `Are you sure you want to delete this todo?`
    );
    if (onClickDelete) {
      dispatch(removeTodo(id));
    }
  };

  const handleOnClickChangeTodo = () => {
    dispatch(changeStatus(id));
  };

  const handleChangeTodoName = () => {
    // dispatch(changeStatus(id));
    const newName = window.prompt("Enter your new Todo name.", "");
    if (newName === name) return alert("This name is already in use");
    if (newName) {
      dispatch(changeTodoName(id, newName));
    } else {
      alert("Please enter a new Todo name");
    }
  };

  return (
    <div className='flex'>
      <div className='flex flex-1 gap-4 items-center hover:opacity-85 cursor-pointer'>
        <input
          type='checkbox'
          id={id}
          checked={completed}
          onChange={handleOnClickChangeTodo}
          className='w-6 h-6 border-[#EA5959] rounded cursor-pointer accent-[#EA5959]'
        />
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
      </div>
      {/* DeleteBTN */}

      <div className='flex'>
        <button
          className='hover:opacity-80 cursor-pointer flex justify-center items-center z-20 w-10 h-10'
          onClick={handleChangeTodoName}
        >
          <HiOutlinePencilAlt className='text-xl z-0 text-info-emphasis mx-2' />
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
