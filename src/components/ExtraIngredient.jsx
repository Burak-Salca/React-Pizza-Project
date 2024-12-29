import React, { useEffect, useState, useCallback } from "react";
import IngredientMapping from "./IngredientMapping";

export default function ExtraIngredient(props) {
  const {
    handleSelect,
    selectedIngredients,
    setIngredientError,
    setExtraPrice,
    updateExtraPrice,
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

  const [selected, setSelected] = useState(selectedIngredients);
  const [error, setError] = useState(null);

  const handleChange = (ingredient) => {
    setSelected((prev) => {
      if (prev.includes(ingredient)) {
        return prev.filter((item) => item !== ingredient);
      } else {
        return [...prev, ingredient];
      }
    });
  };

  // Hata kontrolü ve ek fiyat hesaplama
  useEffect(() => {
    if (selected.length < 4 || selected.length > 10) {
      setError("Lütfen 4 ile 10 arasında malzeme seçin.");
    } else {
      setError(null);
      setExtraPrice(selected.length * 5); // Ek fiyat hesaplama
    }
  }, [selected, setExtraPrice]);

  // Hata durumunu ve seçilen malzemeleri üst bileşene iletme
  useEffect(() => {
    setIngredientError(error);
    handleSelect(selected);
  }, [error, selected, handleSelect, setIngredientError]);

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
            isChecked={selected.includes(ingredient)}
          />
        ))}
      </div>
      {error && (
        <p className="text-red text-sm mt-2">
          Lütfen 4 ile 10 arasında malzeme seçin.
        </p>
      )}
    </div>
  );
}
