import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

const Navber = () => {
  const {user} = useContext(AuthContext)
  // const { user, logOut } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut()
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .cacth((error) => {
  //       console.error(error);
  //     });
  // }
  
  console.log(user)
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      
      <li>
        <NavLink to="/about">Update Profile</NavLink>
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
            className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-28"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl "><span className="text-blue-600">Dream</span> House</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>
      <div className="navbar-end">
      {/* {
        user && user?.email
      } */}
      {/* {user ? (
          <Link onClick={handleLogOut} className="btn ">sing Out</Link>
        ) : (
          <Link to="/login" className="btn ">
            Login
          </Link>
        )} */}
        <button>login</button>
      </div>
    </div>
  );
};

export default Navber;
