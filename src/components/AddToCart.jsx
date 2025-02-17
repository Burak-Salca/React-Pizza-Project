import React, { useState } from 'react';
import NumberButton from './NumberButton';
import OrderApply from './OrderApply';

export default function AddToCart(props) {
  const {handleSubmit, extraPrice,totalPrice, quantity, setQuantity, updateTotalPrice} = props;
  

  const increment = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      updateTotalPrice(newQuantity); 
      return newQuantity;
    });
  };

  const decrement = () => {
    setQuantity((prev) => {
      const newQuantity = prev > 1 ? prev - 1 : 1;
      updateTotalPrice(newQuantity); 
      return newQuantity;
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-20 w-full">
      <NumberButton quantity={quantity} increment={increment} decrement={decrement} />
      <OrderApply 
        handleSubmit={handleSubmit} 
        extraPrice={extraPrice} 
        totalPrice={totalPrice}
        className="w-full md:w-1/2"
      />
    </div>
  );
}
