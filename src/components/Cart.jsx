import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart } from "../redux/slices/cartSlice";

export default function Cart() {
  let info = useSelector((state) => state.cart.cartValue);
  let dispatch = useDispatch();

  return (
    <div className="w-6xl mx-auto">
      Cart
      <div className="grid grid-cols-4 gap-3">
        {info &&
          info.map((value) => (
            <div className="text-center" key={value.id}>
              <img src={value.image} alt="" />
              <h2>{value.price}</h2>
              <p>{value.title}</p>
              <button onClick={() => dispatch(RemoveFromCart(value))} className="border cursor-pointer">
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}