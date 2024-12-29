import React, { useEffect, useState } from 'react'
import ProductInfo from '../components/ProductInfo'
import SizeOption from '../components/SizeOption'
import ThicknessOption from '../components/ThicknessOption'
import ExtraIngredient from '../components/ExtraIngredient'
import Note from '../components/Note'
import AddToCart from '../components/AddToCart'


export default function OrderForm() {
    const basePrice = 85.50;
    const initialErrors = {
        sizeError: false,
        thicknessError: false, 
        ingredientError: false,
        noteError: false,
    };

    const [errors, setErrors] = useState(initialErrors);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedThickness, setSelectedThickness] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [note, setNote] = useState('');
    const [extraPrice, setExtraPrice] = useState(0); 
    const [totalPrice, setTotalPrice] = useState(basePrice); 
    const [quantity, setQuantity] = useState(1);

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

        if (selectedIngredients.length < 4 || selectedIngredients.length > 10) {
            setErrors((prev) => ({ ...prev, ingredientError: true }));
            isValid = false;
        }

        if (note.length < 3) {
            setErrors((prev) => ({ ...prev, noteError: true }));
            isValid = false;
        }
        
        if (isValid) {
            console.log('Sipariş başarıyla gönderildi!');
        }
    };

    const handleSelectIngredients = (selectedIngredients) => {
        setSelectedIngredients(selectedIngredients);
    };

    const updateExtraPrice = (ingredientCount) => {
        const newExtraPrice = ingredientCount * 5;
        setExtraPrice(newExtraPrice);
    };

    const updateTotalPrice = () => {
        if (quantity > 1) {
            setTotalPrice((basePrice + extraPrice) * quantity);
        } else {
            setTotalPrice(basePrice + extraPrice);
        }
    };

    useEffect(() => {
        updateTotalPrice();
    }, [extraPrice]);

    
    useEffect(() => {
        updateTotalPrice();
    }, [quantity]);

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
                <ExtraIngredient
                handleSelect={handleSelectIngredients}
                selectedIngredients={selectedIngredients}
                ingredientError={errors.ingredientError}
                setIngredientError={(value) => setErrors((prev) => ({ ...prev, ingredientError: value }))}
                setExtraPrice={setExtraPrice}
                updateExtraPrice={updateExtraPrice}
                />
            </div>
            <div>
                <Note
                noteError={errors.noteError}
                setNoteError={(value) => setErrors((prev) => ({ ...prev, noteError: value }))}
                setNote={setNote}
                />
            </div>
            <hr className="border-t border-lightGray my-4" />
            <div>
                <AddToCart 
                handleSubmit={handleSubmit} 
                extraPrice={extraPrice}
                totalPrice={totalPrice}
                quantity={quantity}
                setQuantity={setQuantity}
                updateTotalPrice={updateTotalPrice}
                />
            </div>
        </div>
    </div>
  )
}
