import { FiCheckSquare } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  changeCategory,
  changeStatus,
  changeTodoName,
  removeTodo,
} from "../../../redux/actions";
import { useState } from "react";

const Todo = (props) => {
  const { id, name, category, completed } = props;
  const dispatch = useDispatch();

  const [isChangeTodoName, setIsChangeTodoName] = useState(false);
  const [newCategory, setNewCategory] = useState(category);
  const [isAlert, setIsAlert] = useState(false);

  const handleDeleteTodo = (e) => {
    let onClickDelete = window.confirm(
      `Are you sure you want to delete this todo?`
    );
    if (onClickDelete) {
      dispatch(removeTodo(id));
      setTimeout(() => setIsAlert(!isAlert), 200);
      setTimeout(() => setIsAlert(false), 1500);
    }
  };

  const handleOnClickChangeStatus = () => {
    dispatch(changeStatus(id));
  };

  const handleToggleChangeTodoName = () => {
    setIsChangeTodoName(!isChangeTodoName);
    if (isChangeTodoName) {
      let timeId = setTimeout(() => alert("Successfully changed"), 300);
      return clearTimeout(timeId);
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
      {/* Toast */}
      <div
        id='toast-success'
        className={
          isAlert
            ? "flex items-center w-full absolute top-0 right-0 transition-all z-50 max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            : "flex items-center w-full absolute top-0 right-0 translate-x-[250%] transition-all z-50 max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        }
        role='alert'
      >
        <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
          </svg>
          <span className='sr-only'>Check icon</span>
        </div>
        <div className='ms-3 text-sm font-normal'>
          Remove item successfully.
        </div>
      </div>
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
              // type='text'
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
        {isChangeTodoName ? (
          <button
            className='hover:opacity-80 cursor-pointer flex justify-center items-center z-20 w-10 h-10'
            onClick={handleToggleChangeTodoName}
          >
            <FiCheckSquare className='text-xl z-0 text-info-emphasis mx-2' />
          </button>
        ) : (
          <button
            className='hover:opacity-80 cursor-pointer flex justify-center items-center z-20 w-10 h-10'
            onClick={handleToggleChangeTodoName}
          >
            <HiOutlinePencilAlt className='text-xl z-0 text-info-emphasis mx-2' />
          </button>
        )}
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
