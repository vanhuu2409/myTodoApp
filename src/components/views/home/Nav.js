import NavItem from "./NavItem";
import { useState } from "react";
import { changeStatus, filterCategoryTodo } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const Nav = () => {
  const isSlelectedCategory = useSelector((state) => state.filter.category);
  const dispatch = useDispatch();
  const handleOnClickNav = (e) => {
    const categorySelected = e.target.innerText;
    dispatch(filterCategoryTodo(categorySelected));
  };

  return (
    <ul className='flex flex-col gap-6'>
      <li
        onClick={handleOnClickNav}
        className={
          isSlelectedCategory === "All" ? "text-[#EA5959]" : "text-[#525252]"
        }
      >
        <NavItem name='All' />
      </li>
      <li
        onClick={handleOnClickNav}
        className={
          isSlelectedCategory === "Groceries"
            ? "text-[#EA5959]"
            : "text-[#525252]"
        }
      >
        <NavItem name='Groceries' />
      </li>
      <li
        onClick={handleOnClickNav}
        className={
          isSlelectedCategory === "College"
            ? "text-[#EA5959]"
            : "text-[#525252]"
        }
      >
        <NavItem name='College' />
      </li>
      <li
        onClick={handleOnClickNav}
        className={
          isSlelectedCategory === "Payments"
            ? "text-[#EA5959]"
            : "text-[#525252]"
        }
      >
        <NavItem name='Payments' />
      </li>
    </ul>
  );
};

export default Nav;
