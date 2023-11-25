import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { LuChefHat } from "react-icons/lu";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import Layout from "../layouts/Layout";
import Contact from "../components/Contact";

const Home = () => {
  useDocumentTitle("Inicio - ChickenBai");

  return (
    <Layout>
      <section className="flex justify-center w-full md:h-[75vh] bg-gradient-to-b from-[#dfd7c3] to-[#e1d6c5]">
        <img
          src="images/oferta.webp"
          alt="Banner"
          className="w-full max-w-screen-lg h-full"
        />
      </section>
      <section className="grid grid-cols-1 gap-12 justify-items-center my-10 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center gap-4 text-center">
          <GoPerson className="text-5xl text-green-600" />
          <h2 className="text-3xl text-green-600 font-semibold">
            Excelente servicio
          </h2>
          <p className="text-xl w-3/4 text-black/30">
            Nuestro personal esta atento a su llamado.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <MdOutlineDeliveryDining className="text-5xl text-yellow-500" />
          <h2 className="text-3xl text-yellow-500 font-semibold">
            Rapido delivery
          </h2>
          <p className="text-lg w-3/4 text-black/30">
            Tu pedido a la puerta de tu hogar en minutos.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <LuChefHat className="text-5xl text-red-500" />
          <h2 className="text-3xl text-red-500 font-semibold">
            Sabor inigualable
          </h2>
          <p className="text-lg w-3/4 text-black/30">
            Receta 100% hecha por nosotros.
          </p>
        </div>
      </section>
      <Contact />
    </Layout>
  );
};

export default Home;
