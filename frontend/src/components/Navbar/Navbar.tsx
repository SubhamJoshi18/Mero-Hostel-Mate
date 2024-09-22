import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="bg-transparent sticky top-0">
        <div className="navbar flex items-center justify-between text-black">
          <div className="logo">
            <img
              className="h-14 w-auto"
              src="/assets/mhmlogo.png"
              alt="mero hostel mate logo"
            />
          </div>
          <div className="nav-elements">
            <ul className="flex items-center gap-x-12">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Hostel</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
