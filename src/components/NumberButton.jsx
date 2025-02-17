import React from 'react'

export default function NumberButton(props) {
    const {quantity, increment, decrement}=props;
    return (
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={decrement}
            className="bg-yellow text-black w-[57px] h-[57px] rounded-lg font-bold text-xl flex items-center justify-center"
          >
            -
          </button>
          <div className="w-[57px] h-[57px] flex items-center justify-center text-black rounded-lg font-bold text-xl">
            {quantity}
          </div>
          <button
            onClick={increment}
            className="bg-yellow text-black w-[57px] h-[57px] rounded-lg font-bold text-xl flex items-center justify-center"
          >
            +
          </button>
        </div>
      );
}
