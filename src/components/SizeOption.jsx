import React, { useState } from 'react'
import SizeMapping from './SizeMapping';

export default function SizeOption() {
    
    const [selectedSize, setSelectedSize] = useState("");
    const sizes = ["Küçük", "Orta", "Büyük"];

    const handleSizeSelection = (e) => {
        setSelectedSize(e.target.value); 
      };
    
  return (
    <div className="flex flex-col gap-4 font-barlow">
      <h2 className="font-bold text-lg text-[20px]">Boyut Seç</h2>
      <SizeMapping
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeChange={handleSizeSelection}/>
    </div>
  )
}
