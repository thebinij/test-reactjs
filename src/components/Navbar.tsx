import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const NavBar = ({ user }: any) => {
  console.log;
  const styles =
    "flex py-2 pl-3 pr-4 items-center gap-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0";
  return (
    <nav className="bg-white border-b border-blue-100 fixed-header">
      <div className="flex max-w-[1000px] justify-between pr-2 w-full px-4  m-auto pt-2 sm:px-4">
        <Link to="/">
          {" "}
          <img src="./logo.png" alt="logo" />
        </Link>
        <ul className="flex justify-end items-center gap-2 md:gap-10">
          <li
            className={`flex py-2 pl-3 pr-4 items-center gap-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
              ${
                window.location.pathname == "/"
                  ? "text-blue-700"
                  : "text-gray-700"
              }`}
          >
            <Link to="/">Home</Link>
          </li>
          {user && (
            <li className={styles}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          <li className={styles}>
            {user && Object.keys(user).length > 0 ? (
              <Link to="/profile">Hello, {user.full_name.split(" ")[0]}</Link>
            ) : (
              <Link to="/login">
                <div className="flex gap-1 justify-center items-center">
                  <span>Login</span>
                  <MdLogin />
                </div>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
