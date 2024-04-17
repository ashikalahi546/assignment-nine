import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

const Navber = () => {
  const { user,logOut } = useContext(AuthContext);
const handleSingOut = ()=>{
  logOut()
  .then((result) => {
    console.log(result.user);
  })
  .catch((error) => {
    console.error(error.message);
  });
}
  // console.log(user);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/update profile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-28 "
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost gap-0 md:text-2xl text-lg ">
          <span className="text-blue-600">Dream</span>House
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>
      <div className="navbar-end">
      <img className="size-10" src="/user2.png" alt="" />
        {user ? (
          <button onClick={handleSingOut} className="btn ml-5 sm:block hidden">Sign Out</button>
        ) : (
      
          <button className="btn ml-5 sm:block hidden">Login</button>
        )}


      </div>
    </div>
  );
};

export default Navber;
