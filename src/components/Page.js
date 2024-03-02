import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../redux/actions";
import Todo from "./Todo";
import NavItem from "./NavItem";
import {v4 as uuidv4} from 'uuid';

function Page() {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList)
    const [todoData, setTodoData] = useState(todoList);
    const [todoName, setTodoName] = useState("");
    const [isSelected, setIsSelected] = useState('All');


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
                    category: isSelected === 'All' ? "Uncategoriezed" : isSelected,
                    completed: false
                }
                dispatch(addTodo(newTodo));
                setTodoData(prev => [...prev, newTodo])
            } else {
                alert("Please enter todo name");
            }
        }
    };
    const handleOnClickNav = (e) => {
        setIsSelected(e.target.innerText)
        if (isSelected !== e.target.innerText) setTodoData(todoList)

    };


    // Side Effect
    useEffect(() => {
        const filterTodoList = todoData.filter(todo => {
            if (isSelected === 'All') return true
            return todo.category === isSelected
        })
        setTodoData(filterTodoList)
    }, [isSelected]);


    return (
        <div className='bg-[#EA5959] w-full h-screen relative flex justify-center items-center'>
            <div className='w-[983px] h-[702px] flex z-20 bg-white rounded-lg drop-shadow-lg'>
                <article
                    className='max-w-[200px] w-full h-full pt-20 flex justify-center border-r border-[#D8D8D8]'
                >
                    <ul className='flex flex-col gap-6'>
                        <li onClick={handleOnClickNav}
                            className={isSelected === 'All' ? 'text-[#EA5959]' : 'text-[#525252]'}>
                            <NavItem name='All'/></li>
                        <li onClick={handleOnClickNav}
                            className={isSelected === 'Groceries' ? 'text-[#EA5959]' : 'text-[#525252]'}>
                            <NavItem name='Groceries'/></li>
                        <li onClick={handleOnClickNav}
                            className={isSelected === 'College' ? 'text-[#EA5959]' : 'text-[#525252]'}>
                            <NavItem name='College'/></li>
                        <li onClick={handleOnClickNav}
                            className={isSelected === 'Payments' ? 'text-[#EA5959]' : 'text-[#525252]'}>
                            <NavItem name='Payments'/></li>
                    </ul>
                </article>
                <main className='flex gap-6 flex-col flex-1 mx-12 mt-8'>
                    <h1
                        className="font-['Lato'] font-bold text-[31px] leading-[37.2px]"
                    >
                        Add Tasks
                    </h1>
                    <div>
                        <input
                            type='text'
                            value={todoName}
                            onChange={handleOnChangeTodo}
                            onKeyPress={handleKeyPress}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder={`Add a new task inside ‘${isSelected}’ category`}
                        />
                    </div>
                    {/* List TODO */}
                    <div className='flex flex-col gap-3'>
                        {/* List TODO */}
                        {/* list item */}
                        {todoData.map((todo, index) => {
                            return <Todo key={index + 1} {...todo} />
                        })}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Page;
