/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShippingCarge = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingCarge = totalShippingCarge + product.shipping;
        quantity = quantity + product.quantity
    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShippingCarge + tax;

  return (
    <div className="cart">
      <h5 className="cart-name">Order Summery</h5>
      <p>Selected Items:{quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping Charge: ${totalShippingCarge}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
