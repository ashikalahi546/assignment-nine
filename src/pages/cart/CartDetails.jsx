import React from "react";
import { useParams } from "react-router-dom";

const CartDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="h-[515px] flex flex-col items-center justify-center">
      <h2 className="text-3xl">Details</h2>
      <h1 className="text-2xl"> {id}</h1>
    </div>
  );
};

export default CartDetails;
