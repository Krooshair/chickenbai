import { Link } from "react-router-dom";

const Card = ({name, price, description, images, isDiscount}) => {

  const urlName = name.charAt(0).toLowerCase() + name.slice(1);

  return (
    <Link to={`/carta/${urlName.replace(/ /g, "-")}`} className="w-full">
      <div className="relative max-w-md grid grid-cols-2 justify-items-center rounded-md p-2 border-2 border-black/5">
        <span
          className={
            isDiscount ? "absolute flex h-4 w-4 -top-1 -right-1" : "hidden"
          }
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-400"></span>
        </span>
        <div
          className="bg-contain bg-no-repeat bg-top rounded-sm w-full lg:bg-center"
          style={{ backgroundImage: `url(${images})` }}
        ></div>
        <div className="p-4 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-md text-black font-semibold font-sans">
              {name}
            </h1>
            <p className="text-black/50 text-xs">{description}</p>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <h2
              className={
                isDiscount
                  ? "text-md text-black/50 line-through"
                  : "text-xl text-red-500 font-bold"
              }
            >
              S/ {price.toFixed(2)}
            </h2>
            <h2
              className={
                isDiscount ? "text-xl text-red-500 font-bold" : "hidden"
              }
            >
              S/ {(price - (price * isDiscount) / 100).toFixed(2)}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card