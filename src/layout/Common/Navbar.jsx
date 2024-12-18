import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful SignOut");
      })
      .catch((error) => console.log("failed to sign out "));
  };

  const menu = (
    <>
      <li>
        <NavLink to="/myApplication">My Application</NavLink>
      </li>

      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink>Home3</NavLink>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link to="/signIn">
              <button onClick={handleSignOut} className=" btn btn-info">
                Sign Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <div className=" btn btn-outline w-40 flex justify-end">
              <Link to="/register">
                <button className=" hover:underline ">Register</button>
              </Link>
              /
              <Link to="/signIn">
                <button className="hover:underline ">Sign In</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
