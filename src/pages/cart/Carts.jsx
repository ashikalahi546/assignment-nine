import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";

const Carts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-12">
      <div>
        <h2 className="lg:text-4xl sm:text-2xl text-xl font-medium text-center mb-12">
          {" "}
          Choice Our<span className="text-blue-600"> Best Deal</span>
        </h2>
        <div className=" grid sm:grid-cols-2 gap-12">
          {data?.map((cart,i) => (
            <Cart cart={cart} key={i}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carts;
