import {useParams} from 'react-router-dom'
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Layout from '../layouts/Layout';
import Contact from '../components/Contact';

const Comida = ({comidas, handleClick}) => {

  useDocumentTitle("Carta - ChickenBai");

  let { comida } = useParams()

  const dataName = (comida.charAt(0).toUpperCase() + comida.slice(1)).replace(/-/g, " ");

  return comidas.map((item) =>
    item.name == dataName ? (
      <Layout key={item.id}>
        <section className="w-[90%] mx-auto my-12 flex flex-col gap-8 md:grid md:grid-cols-2 md:justify-items-center">
          <img
            src={`images/${item.images}`}
            alt="Comida"
            className="rounded-md md:w-full md:max-w-lg"
          />
          <div className="flex flex-col gap-6 justify-around lg:justify-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">{item.name}</h1>
              <p className="text-black/50">{item.description}</p>
            </div>
            <div className="flex gap-4 items-center">
              <h2
                className={
                  item.isDiscount
                    ? "text-md text-black/50 line-through"
                    : "text-xl text-red-500 font-bold"
                }
              >
                S/ {item.price.toFixed(2)}
              </h2>
              <h2
                className={
                  item.isDiscount ? "text-xl text-red-500 font-bold" : "hidden"
                }
              >
                S/{" "}
                {(item.price - (item.price * item.isDiscount) / 100).toFixed(2)}
              </h2>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                className="w-[80%] max-w-md bg-green-600 py-2 rounded-lg text-white font-semibold"
                onClick={() => handleClick(item.name)}
              >
                Agregar a pedidos
              </button>
            </div>
          </div>
        </section>
        <Contact />
      </Layout>
    ) : (
      ""
    )
  );
}

export default Comida