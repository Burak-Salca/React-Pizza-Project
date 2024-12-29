import React, { useState } from 'react';
import NumberButton from './NumberButton';
import OrderApply from './OrderApply';

export default function AddToCart(props) {
  const {handleSubmit} = props;
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex justify-between items-start mb-20">
      <NumberButton quantity={quantity} increment={increment} decrement={decrement} />
      <OrderApply handleSubmit={handleSubmit} />
    </div>
  );
}
