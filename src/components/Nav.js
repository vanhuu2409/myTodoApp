import NavItem from "./NavItem";
import {useState} from "react";
import {changeStatus, filterCategoryTodo} from "../redux/actions";
import {useDispatch} from "react-redux";
const Nav = () => {
    const [isSelected, setIsSelected] = useState("All");
    const dispatch = useDispatch();
    console.log(isSelected)
    const handleOnClickNav = (e) => {
        const categorySelected = e.target.innerText;
        dispatch(filterCategoryTodo(categorySelected))
        setIsSelected(categorySelected)
    };



    return (<ul className='flex flex-col gap-6'>
        <li
            onClick={handleOnClickNav}
            className={
                isSelected === "All" ? "text-[#EA5959]" : "text-[#525252]"
            }
        >
            <NavItem name='All'/>
        </li>
        <li
            onClick={handleOnClickNav}
            className={
                isSelected === "Groceries" ? "text-[#EA5959]" : "text-[#525252]"
            }
        >
            <NavItem name='Groceries'/>
        </li>
        <li
            onClick={handleOnClickNav}
            className={
                isSelected === "College" ? "text-[#EA5959]" : "text-[#525252]"
            }
        >
            <NavItem name='College'/>
        </li>
        <li
            onClick={handleOnClickNav}
            className={
                isSelected === "Payments" ? "text-[#EA5959]" : "text-[#525252]"
            }
        >
            <NavItem name='Payments'/>
        </li>
    </ul>);
}

export default Nav