import React, { useState } from 'react'
import ProductInfo from '../components/ProductInfo'
import SizeOption from '../components/SizeOption'
import ThicknessOption from '../components/ThicknessOption'
import ExtraIngredient from '../components/ExtraIngredient'
import Note from '../components/Note'
import AddToCart from '../components/AddToCart'


export default function OrderForm() {
    const initialErrors = {
        sizeError: false,
        thicknessError: false, 
        ingredientError: false,
        noteError: false,
    };

    const [errors, setErrors] = useState(initialErrors);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedThickness, setSelectedThickness] = useState('');

    const handleSubmit = () => {
        let isValid = true;

        if (!selectedSize) {
            setErrors((prev) => ({ ...prev, sizeError: true }));
            isValid = false;
        }

        if (!selectedThickness) {
            setErrors((prev) => ({ ...prev, thicknessError: true }));
            isValid = false;
        }
        
        if (isValid) {
            console.log('Sipariş başarıyla gönderildi!');
        }
    };

  return (
    <div className="w-1/2 mx-auto flex flex-col h-screen mt-12 gap-4">
        <div>
            <ProductInfo/>
        </div>
        <div className='font-barlow font-flex flex-col space-y-10'>
            <div className="flex justify-between items-start mt-6">
                <SizeOption 
                sizeError={errors.sizeError}
                setErrors={setErrors}
                setSelectedSize={setSelectedSize}/>
                <ThicknessOption
                thicknessError={errors.thicknessError}
                setErrors={setErrors}
                setSelectedThickness={setSelectedThickness}
                />
            </div>
            <div>
                <ExtraIngredient/>
            </div>
            <div>
                <Note/>
            </div>
            <hr className="border-t border-lightGray my-4" />
            <div>
                <AddToCart handleSubmit={handleSubmit}/>
            </div>
        </div>
    </div>
  )
}
