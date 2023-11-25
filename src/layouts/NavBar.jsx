import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="w-full p-4 bg-red-500 overflow-hidden">
      <nav className="flex justify-between items-center md:px-8 md:py-4 lg:px-16">
        <div className="flex flex-col items-center md:flex-row md:gap-2">
          <img src="/images/logo.webp" alt="Logo" className="w-20 lg:w-24" />
          <h2 className="text-md font-sans text-white font-semibold md:text-xl lg:text-2xl">
            Chicken
            <span className="text-xl font-serif text-green-500 md:text-3xl">
              BAI
            </span>
          </h2>
        </div>
        <input type="checkbox" id="menu" className="peer hidden" />
        <label
          htmlFor="menu"
          className="text-white text-4xl z-20 peer-checked:text-green-500 md:hidden"
        >
          <FaBars />
        </label>
        <div className="fixed inset-0 bg-black/60 translate-x-full peer-checked:translate-x-0 transition-transform z-10 text-white font-serif md:static md:translate-x-0 md:bg-transparent">
          <ul className="absolute inset-x-0 top-24 p-12 bg-red-500 w-[90%] mx-auto rounded-md h-max text-center text-xl grid gap-6 font-bold text-dark-blue shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static lg:text-2xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : ""
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/carta"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : ""
                }
              >
                Carta
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pedidos"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : ""
                }
              >
                Pedidos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : ""
                }
              >
                Contactanos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
