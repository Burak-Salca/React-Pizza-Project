import React from 'react'

export default function IngredientMapping(props) {
    const {ingredient, handleChange, isChecked} = props;
  return (
    <div>
        <label className="flex items-center  gap-2">
            <input
                type="checkbox"
                value={ingredient}
                checked={isChecked}
                onChange={() => handleChange(ingredient)}
                className="w-4 h-4"
            />
            <span className="font-barlow text-lightGray font-extrabold text-lg ">{ingredient}</span>
        </label>
    </div>
  )
}
