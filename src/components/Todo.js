import {RiDeleteBin6Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {changeStatus, removeTodo} from "../redux/actions";
import {useState} from "react";

const Todo = (props) => {
    const {id, name, category, completed} = props
    console.log(props)
    const [checked, setChecked] = useState(completed)
    const dispatch = useDispatch();

    const handleDeleteTodo = (e) => {
        let onClickDelete = window.confirm(
            `Are you sure you want to delete this todo?`
        );
        if (onClickDelete) {
            dispatch(removeTodo(e.currentTarget?.dataset.id));
        }
    };

    const handleOnClickChangeTodo = (e) =>{
        setChecked(!checked)
        dispatch(changeStatus(id))
    }

    return (
        <div className='flex'>
            <div
                 className='flex flex-1 gap-4 items-center hover:opacity-85 cursor-pointer'>
                <input
                    type='checkbox'
                    id={id}
                    checked={checked}
                    onChange={handleOnClickChangeTodo}
                    className='w-6 h-6 border-[#EA5959] rounded cursor-pointer accent-[#EA5959]'
                />
                <label
                    htmlFor={id}
                    className='relative text-[18px] cursor-pointer text-[#5A5A5A] font-["Lato"] leading-[21.6px]'
                >
                    {name}
                    <span
                        className='min-w-[90px] cursor-pointer py-[4px] px-3 ml-2 font-thin font-["Lato"] text-[12px] leading-[14.4px] h-[14px] rounded-md bg-[#EA5959] text-white text-center'>
            {category}
          </span>
                    {checked && (
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
