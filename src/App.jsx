import { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handelCart = (product) => {
    const isExist = cart.find((pd) => pd.id == product.id);
    if (!isExist) {
      setCart([...cart, product]);
      setTotal(total + product.price);
    }
  };

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h1 className="bg-red-400 text-3xl text-center py-5 font-semibold">
        Vix Watch Store
      </h1>
      <div className="flex justify-between  gap-7 container mx-auto mt-8">
        <div className="w-3/4">
          <h1>Products : {products.length}</h1>
          <div className="grid grid-cols-2 gap-5">
            {products.map((pd) => (
              <Product key={pd.id} product={pd} handelCart={handelCart} />
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <h1>cart</h1>
          <div className="flex justify-between text-center">
            <p className="w-1/3 text-xl font-bold text-start">Name</p>
            <p className="w-1/3 text-xl font-bold">Brand</p>
            <p className="w-1/3 text-xl font-bold">Price</p>
          </div>
          <hr className="my-3 h-1 w-full mx-auto bg-gray-300" />
          {cart.map((cart) => (
            <Cart key={cart.id} cart={cart} />
          ))}
          <hr className="my-3 h-1 w-full mx-auto bg-gray-300" />
          <div className="flex justify-between ">
            <p className="w-1/3 text-xl font-bold text-start">ToTal</p>
            <p className="w-1/3 text-xl font-bold text-center">{total}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
