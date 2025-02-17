import React from "react";
import IngredientMapping from "./IngredientMapping";

export default function ExtraIngredient(props) {
  const {
    handleSelect,
    selectedIngredients,
    ingredientError,
    setIngredientError,
  } = props;

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
    "Kabak",
  ];

  const handleChange = (ingredient) => {
    const newSelected = selectedIngredients.includes(ingredient)
      ? selectedIngredients.filter((item) => item !== ingredient)
      : [...selectedIngredients, ingredient];
    
    const isInvalidCount = newSelected.length < 4 || newSelected.length > 10;
    setIngredientError(isInvalidCount);
    handleSelect(newSelected);
  };

  return (
    <div className="flex flex-col gap-4 font-barlow">
      <h2 className="font-bold text-lg text-[20px]">Ek Malzemeler</h2>
      <p className="text-[16px] font-barlow text-darkGray">
        En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
      </p>
      <div className="grid grid-cols-2 gap-2">
        {ingredients.map((ingredient, index) => (
          <IngredientMapping
            key={index}
            ingredient={ingredient}
            handleChange={handleChange}
            isChecked={selectedIngredients.includes(ingredient)}
          />
        ))}
      </div>
      {ingredientError && (
        <p className="text-red text-sm mt-2">Lütfen 4 ile 10 arasında malzeme seçin.</p>
      )}
    </div>
  );
}
