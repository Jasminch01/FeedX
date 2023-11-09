import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import UseAuth from "../../Hooks/UseAuth";
const defaultProfile = "https://i.ibb.co/3cxMLXJ/user.png";

const Navbar = () => {
  const { logOut, user } = UseAuth();

  const signOutHandler = () => {
    logOut();
  };

  const navLinks = (
    <>
      <div className="flex space-x-3 text-white">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-white text-black px-3 py-4 rounded-full text-sm"
              : "py-4 text-white text-sm"
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
              ? "bg-white text-black px-3 py-4 rounded-full text-sm"
              : "py-4 text-white text-sm"
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
              ? "bg-white text-black px-3 py-4 rounded-full text-sm"
              : "py-4 text-white text-sm"
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
              ? "bg-white text-black px-3 py-4 rounded-full text-sm"
              : "py-4 text-white text-sm"
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
              ? "bg-white text-black px-3 py-4 rounded-full text-sm"
              : "py-4 text-white text-sm"
          }
        >
          My Foods Request
        </NavLink>
        <div className="">
          <div className="dropdown relative">
            <label
              tabIndex={0}
              className={
                user
                  ? "flex  hover:text-black hover:bg-slate-100 p-2  space-x-2 rounded-full justify-center items-center"
                  : "flex justify-center p-2"
              }
            >
              <img
                src={
                  user
                    ? user.photoURL !== null
                      ? user.photoURL
                      : defaultProfile
                    : defaultProfile
                }
                alt=""
                className="w-9 rounded-full ring-2 ring-green-500 outline-offset-2"
              />
              <p className="text-center text-sm ">
                {user?.displayName ? user.displayName.slice(0, 8) : " "}
              </p>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-32 absolute right-0  md:-right-24"
            >
              <li className="cursor-pointer p-3">
                {!user ? (
                  <Link to="/login" className="cursor-pointer text-black">
                    Log in
                  </Link>
                ) : (
                  <button
                    onClick={signOutHandler}
                    className="cursor-pointer text-black"
                  >
                    Log out
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
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
          <Link to = '/'>
            <p className="font-bold text-4xl text-white">FeedX</p>
          </Link>
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
