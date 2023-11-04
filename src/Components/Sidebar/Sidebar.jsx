import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " text-black px-3 py-2 rounded-full" : "py-2 "
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/avilable-foods"}
          className={({ isActive }) =>
            isActive ? " text-black px-3 py-2 rounded-full" : "py-2 "
          }
        >
          Avilable Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/add-foods"}
          className={({ isActive }) =>
            isActive ? " text-black px-3 py-2 rounded-full" : "py-2 "
          }
        >
          Add Foods
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/manage-food"}
          className={({ isActive }) =>
            isActive ? " text-black px-3 py-2 rounded-full" : "py-2 "
          }
        >
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/my-food-request"}
          className={({ isActive }) =>
            isActive ? " text-black px-3 py-2 rounded-full" : "py-2 "
          }
        >
          My Foods Request
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive ? " text-black px-3 py-2 rounded-full" : "py-2 "
          }
        >
          Login
        </NavLink>
      </li>
    </div>
  );
};

export default Sidebar;
