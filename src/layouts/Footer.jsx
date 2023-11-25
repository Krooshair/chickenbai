import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 mt-4 p-4">
      <section className="w-[80%] mx-auto grid justify-items-center gap-4 footer-area md:footer-area-md">
        <nav className=" [grid-area:navigation] w-full p-4">
          <h1 className=" text-white text-2xl font-bold">
            Navegación
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mt-2"></div>
          <ul className="flex flex-col gap-2 mt-4 ml-4 md:ml-6">
            <li className="text-lg text-white/70 font-semibold md:text-xl">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="text-lg text-white/70 font-semibold md:text-xl">
              <NavLink to="/carta">Carta</NavLink>
            </li>
            <li>
              <ul className="ml-2 pl-2 border-white/60 text-white/50 md:text-md">
                <li>
                  <NavLink to="/carta/personales">Personales</NavLink>
                </li>
                <li>
                  <NavLink to="/carta/para-dos">Para dos</NavLink>
                </li>
                <li>
                  <NavLink to="/carta/familiares">Familiares</NavLink>
                </li>
              </ul>
            </li>
            <li className="text-lg text-white/70 font-semibold md:text-xl">
              <NavLink to="/pedidos">Pedidos</NavLink>
            </li>
            <li className="text-lg text-white/70 font-semibold md:text-xl">
              <NavLink to="/contacto">Contactanos</NavLink>
            </li>
          </ul>
        </nav>
        <div className="w-[90%] [grid-area:social-media] p-4 my-4 md:mt-0">
          <h1 className="text-white text-2xl font-bold font-serif">
            Siguenos
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mt-2"></div>
          <ul className="flex justify-center items-center gap-10 text-4xl h-full md:text-5xl md:gap-16">
            <li className="text-facebook-color">
              <a
                href="https://www.facebook.com/FabianBermudezTapia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="text-green-600">
              <a
                href="https://wa.link/dsvzoj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
            <li className="text-github-color">
              <a
                href="https://github.com/Krooshair"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-end text-center h-full text-neutral-600 text-sm [grid-area:copy]">
          <p>© 2023, ChickenBai | Todos los derechos reservados</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
