import NavItem from "./NavItem";
import { useDispatch, useSelector } from "react-redux";
import { filterCategoryTodo } from "./reducerSlice/filterSlice";
const Nav = () => {
  const navList = ["All", "Groceries", "College", "Payments"];
  const isSlelectedCategory = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  const handleOnClickNav = (e) => {
    const categorySelected = e.target.innerText;
    dispatch(filterCategoryTodo(categorySelected));
  };

  return (
    <ul className='flex flex-col gap-6'>
      {navList.map((item, index) => (
        <li
          key={index}
          onClick={handleOnClickNav}
          className={
            isSlelectedCategory === item ? "text-[#EA5959]" : "text-[#525252]"
          }
        >
          <NavItem name={item} />
        </li>
      ))}
    </ul>
  );
};

export default Nav;
