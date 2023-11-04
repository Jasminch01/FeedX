import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const navLinks = (
  <>
    <div className="flex space-x-3 text-white">
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-white text-black px-3 py-2 rounded-full"
            : "py-2 text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/avilable-foods"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-white text-black px-3 py-2 rounded-full"
            : "py-2 text-white"
        }
      >
        Avilable Foods
      </NavLink>
      <NavLink
        to={"/add-foods"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-white text-black px-3 py-2 rounded-full"
            : "py-2 text-white"
        }
      >
        Add Foods
      </NavLink>
      <NavLink
        to={"/manage-food"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-white text-black px-3 py-2 rounded-full"
            : "py-2 text-white"
        }
      >
        Manage My Foods
      </NavLink>
      <NavLink
        to={"/my-food-request"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-white text-black px-3 py-2 rounded-full"
            : "py-2 text-white"
        }
      >
        My Foods Request
      </NavLink>
      <NavLink
        to={"/login"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-white text-black px-3 py-2 rounded-full"
            : "py-2 text-white"
        }
      >
        Login
      </NavLink>
    </div>
  </>
);

const Navbar = () => {
  return (
    <div className=" bg-sky-700">
      <div className="navbar lg:w-[80%] lg:mx-auto">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <FiMenu className="text-white text-2xl"></FiMenu>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <p className="font-bold text-4xl text-white">FeedX</p>
        </div>
        <div className="flex-none hidden lg:block">
          {/* Navbar menu content here */}
          {navLinks}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
