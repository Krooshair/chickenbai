import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Layout from "../layouts/Layout";
import Contact from '../components/Contact'

const Pedidos = ({ pedido, setPedido }) => {
  useDocumentTitle("Pedidos - ChickenBai");

  const incrementQuantity = (id) => {
    setPedido((prevPedido) =>
      prevPedido.map((item) =>
        item.food.id === id && item.quantity < 5
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setPedido((prevPedido) =>
      prevPedido.map((item) =>
        item.food.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const onDelete = (id) => {
    setPedido((prevPedido) => prevPedido.filter((item) => item.food.id !== id));
  };

  return (
    <Layout>
      <section>
        {pedido.length > 0 ? (
          pedido.map((item) => {
            const food = item.food;
            return (
              <div
                key={food.id}
                className="relative w-[90%] mx-auto my-12 flex flex-col gap-8 md:grid md:grid-cols-2 md:justify-items-center"
              >
                <p
                  className="absolute top-2 right-2 px-2 py-1 rounded-full bg-red-500 text-white cursor-pointer"
                  onClick={() => onDelete(food.id)}
                >
                  X
                </p>
                <img
                  src={`../images/${food.images}`}
                  alt="Comida"
                  className="rounded-md md:w-full md:max-w-lg"
                />
                <div className="flex flex-col gap-6 justify-around lg:justify-center">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold">{food.name}</h1>
                    <p className="text-black/50">{food.description}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <h2
                      className={
                        food.isDiscount
                          ? "text-md text-black/50 line-through"
                          : "text-xl text-red-500 font-bold"
                      }
                    >
                      S/ {(food.price * item.quantity).toFixed(2)}
                    </h2>
                    <h2
                      className={
                        food.isDiscount
                          ? "text-xl text-red-500 font-bold"
                          : "hidden"
                      }
                    >
                      S/{" "}
                      {(
                        (food.price - (food.price * food.isDiscount) / 100) *
                        item.quantity
                      ).toFixed(2)}
                    </h2>
                  </div>
                  <div className="flex items-center gap-10 justify-around">
                    <button
                      className={
                        item.quantity > 1
                          ? "text-2xl px-3 rounded-full bg-red-600 text-white text-center"
                          : "text-2xl px-3 rounded-full bg-gray-600 text-white text-center"
                      }
                      onClick={() => decrementQuantity(food.id)}
                    >
                      -
                    </button>
                    <p className="text-2xl font-bold">{item.quantity}</p>
                    <button
                      className={
                        item.quantity < 5
                          ? "text-2xl px-3 rounded-full bg-red-600 text-white text-center"
                          : "text-2xl px-3 rounded-full bg-gray-600 text-white text-center"
                      }
                      onClick={() => incrementQuantity(food.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-[90%] mx-auto my-20 flex justify-center items-center md:h-56">
            <h1 className="text-xl text-center text-black/50">
              No tienes pedidos guardados
            </h1>
          </div>
        )}
        <div
          className={
            pedido.length > 0
              ? "fixed left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl flex justify-around items-center bottom-10 bg-red-500 px-12 py-4 rounded-md text-white shadow-lg"
              : "hidden"
          }
        >
          <h1 className="text-xl font-semibold">Total:</h1>
          <h1 className="font-bold text-2xl">
            s/{" "}
            {pedido
              .reduce((sum, item) => {
                const price = item.food.isDiscount
                  ? item.food.price -
                    (item.food.price * item.food.isDiscount) / 100
                  : item.food.price;
                return sum + price * item.quantity;
              }, 0)
              .toFixed(2)}
          </h1>
        </div>
      </section>
      <Contact />
    </Layout>
  );
};

export default Pedidos;
