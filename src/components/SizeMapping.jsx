import React from 'react'

export default function SizeMapping(props) {
    const {sizes,onSizeChange}=props;
  return (
    <div className="flex flex-col gap-2">
        {sizes.map((size)=>(
            <label key={size} className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name="sizeSelection"
                    value={size}
                    onChange={onSizeChange}
                    className="w-4 h-4 accent-blue-500 cursor-pointer"/>
                <span className="text-lightGray">{size}</span>
            </label>
        ))}
    </div>
  )
}
