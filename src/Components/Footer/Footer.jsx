import { Link, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const navLinks = (
    <>
      <div className="">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700  text-sm link link-hover"
                : " text-sm"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/avilable-foods"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700  text-sm link link-hover"
                : " text-sm"
            }
          >
            Avilable Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/add-foods"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 text-sm link link-hover"
                : "py-2  text-sm"
            }
          >
            Add Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/manage-food"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 text-sm link link-hover"
                : "text-sm"
            }
          >
            Manage My Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/my-food-request"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700 text-sm link link-hover"
                : " text-sm"
            }
          >
            My Foods Request
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/login"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-sky-700text-sm link link-hover"
                : "text-sm"
            }
          >
            Login
          </NavLink>
        </li>
      </div>
    </>
  );
  return (
    <div>

    <footer className="py-20 px-5 md:flex justify-between">
      <div className="text-center md:text-left">
        <p className="text-4xl font-bold text-sky-700">FeedX</p>
        <p>
          Community Food Sharing <br />
          and Surplus Reduction Platform
        </p>
      </div>
      <div className="list-none justify-center md:text-left text-center">
        {navLinks}
      </div>
      <div className="list-none md:text-end text-center">
        <div className="flex mb-3 md:justify-end space-x-3 justify-center">
          <FaFacebook className="text-3xl"></FaFacebook>
          <AiOutlineInstagram className="text-3xl"></AiOutlineInstagram>
          <AiFillLinkedin className="text-3xl"></AiFillLinkedin>
        </div>
        <li>
          <Link className="link link-hover text-end">Terms & conditions</Link>
        </li>
        <li>
          <Link className="link link-hover text-end">Privacy policy</Link>
        </li>
        <li>
          <Link className="link link-hover text-end">Cookie policy</Link>
        </li>
      </div>
    </footer>
      <p className="text-center pb-20">Copyright © 2023 - All right reserved by FeedX</p>
    </div>
  );
};

export default Footer;
