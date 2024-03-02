import React, {useEffect, useState} from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {onChangeStatusTodo, removeTodo} from "../redux/actions";

const Todo = ({id, name, category, completed}) => {
    const [isComplete, setIsComplete] = useState(completed);
    const dispatch = useDispatch();

    const handleOnChangeTodo = (e) => {
        setIsComplete(!isComplete);
    };
    useEffect(() => {
        console.log({id, name, category, completed: isComplete})
        dispatch(onChangeStatusTodo({id, name, category, completed: isComplete}))
    }, [isComplete]);

    const handleDeleteTodo = (e) => {
        let onClickDelete = window.confirm(
            `Are you sure you want to delete this todo?`
        );
        if (onClickDelete) {
            dispatch(removeTodo(e));
        }
    };
    return (
        <div className='flex'>
            <div onClick={handleOnChangeTodo}
                 className='flex flex-1 gap-4 items-center hover:opacity-85 cursor-pointer'>
                <input
                    type='checkbox'
                    checked={isComplete}
                    className='w-6 h-6 border-[#EA5959] rounded cursor-pointer accent-[#EA5959]'
                />
                <label
                    className='relative text-[18px] cursor-pointer text-[#5A5A5A] font-["Lato"] leading-[21.6px]'
                >
                    {name}
                    <span
                        className='min-w-[90px] cursor-pointer py-[4px] px-3 ml-2 font-thin font-["Lato"] text-[12px] leading-[14.4px] h-[14px] rounded-md bg-[#EA5959] text-white text-center'>
            {category}
          </span>
                    {isComplete && (
                        <div className='absolute left-0 top-1/2 w-full h-[1px] bg-[#5A5A5A]'></div>
                    )}
                </label>
            </div>
            {/* DeleteBTN */}
            <button
                data-id={id}
                className='hover:opacity-80 cursor-pointer flex justify-center items-center z-20 w-10 h-10'
                onClick={handleDeleteTodo}
            >
                <RiDeleteBin6Line className='text-xl z-0 text-[#EA5959] mx-2'/>
            </button>
        </div>
    );
};

export default Todo;
