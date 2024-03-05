import NavItem from "./NavItem";
import { filterCategoryTodo } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const Nav = () => {
  const navList = ["All", "Groceries", "College", "Payments"];
  const isSlelectedCategory = useSelector((state) => state.filter.category);
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
