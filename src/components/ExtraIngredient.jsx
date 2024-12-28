import React, { useState } from 'react'
import IngredientMapping from './IngredientMapping'

export default function ExtraIngredient() {
    const ingredients = [
        "Pepperoni",
        "Kanada Jambonu",
        "Soğan",
        "Mısır",
        "Jalapeno",
        "Biber",
        "Ananas",
        "Sosis",
        "Tavuk Izgara",
        "Domates",
        "Sucuk",
        "Sarımsak",
        "Zeytin",
        "Kabak"
    ]

    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleChange = (ingredient) => {
        if (selectedIngredients.includes(ingredient)) {
            setSelectedIngredients((prev) =>
                prev.filter((item) => item !== ingredient)
            );
        } else {
            setSelectedIngredients((prev) => [...prev, ingredient]);
        }
    };

  return (
    <div className='flex flex-col gap-4 font-barlow'>
        <h2 className="font-bold text-lg text-[20px]">Ek Malzemeler</h2>
        <p className='text-[16px] font-barlow text-darkGray'>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="grid grid-cols-2 gap-2">
            {ingredients.map((ingredient, index) => (
                <IngredientMapping 
                key={index}
                ingredient={ingredient}
                handleChange={handleChange}
                isChecked={selectedIngredients.includes(ingredient)}/>
            ))}
        </div>
    </div>
  )
}
