import React, { useState } from 'react'
import SizeMapping from './SizeMapping';

export default function SizeOption(props) {
    const { sizeError, setErrors, setSelectedSize } = props;
    const sizes = ["Küçük", "Orta", "Büyük"];

    const handleSizeSelection = (e) => {
      const selectedValue = e.target.value;
      setSelectedSize(selectedValue); 
      setErrors((prev) => ({ ...prev, sizeError: false })); 
  };
    
  return (
    <div className="flex flex-col gap-4 font-barlow">
      <h2 className="font-bold text-lg text-[20px]">Boyut Seç</h2>
      <SizeMapping
        sizes={sizes}
        onSizeChange={handleSizeSelection}/>
      {sizeError && (
        <p className="text-red text-sm">
          Boyut seçmelisiniz!
        </p>
        )}
    </div>
  )
}
