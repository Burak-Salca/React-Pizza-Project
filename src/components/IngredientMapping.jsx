import React from 'react'

export default function IngredientMapping(props) {
    const {ingredient, handleChange, isChecked} = props;
  return (
    <div className="w-full">
        <label className="flex items-center gap-2 cursor-pointer py-1">
            <input
                type="checkbox"
                value={ingredient}
                checked={isChecked}
                onChange={() => handleChange(ingredient)}
                className="w-5 h-5 min-w-[20px] accent-yellow cursor-pointer"
            />
            <span className="font-barlow text-lightGray font-extrabold text-base md:text-lg whitespace-nowrap">
                {ingredient}
            </span>
        </label>
    </div>
  )
}
