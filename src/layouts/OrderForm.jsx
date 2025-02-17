import React, { useEffect, useState } from 'react';
import ProductInfo from '../components/ProductInfo';
import SizeOption from '../components/SizeOption';
import ThicknessOption from '../components/ThicknessOption';
import ExtraIngredient from '../components/ExtraIngredient';
import Note from '../components/Note';
import AddToCart from '../components/AddToCart';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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

    const history = useHistory();

    const handleSubmit = async () => {
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
            const orderData = {
              isim: 'Position Absolute Acı Pizza',
              boyut: selectedSize,
              kalınlık: selectedThickness,
              malzemeler: selectedIngredients,
              özel: note,
              toplamFiyat: totalPrice,
              miktar: quantity,
            };
      
            try {
              const response = await axios.post('https://reqres.in/api/pizza', orderData);
              console.log('Sipariş Özeti:', response.data);
      
              // Başarıyla gönderildiğinde, veriyi SuccessPage'e yönlendir
              history.push('/success', { orderData: response.data });
            } catch (error) {
              console.error('Sipariş gönderilirken bir hata oluştu:', error);
            }
          }
    };

    const handleSelectIngredients = (selectedIngredients) => {
        setSelectedIngredients(selectedIngredients);
        const newExtraPrice = selectedIngredients.length * 5;
        setExtraPrice(newExtraPrice);
    };

    const updateTotalPrice = (newQuantity) => {
        setTotalPrice((basePrice + extraPrice) * newQuantity);
    };

    useEffect(() => {
        updateTotalPrice(quantity);
    }, [extraPrice, quantity, basePrice]);

    return (
        <div className="w-1/2 mx-auto flex flex-col h-screen mt-12 gap-4">
            <div>
                <ProductInfo />
            </div>
            <div className="font-barlow font-flex flex-col space-y-10">
                <div className="flex justify-between items-start mt-6">
                    <SizeOption
                        sizeError={errors.sizeError}
                        setErrors={setErrors}
                        setSelectedSize={setSelectedSize}
                    />
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
                        errors={errors}
                    />
                </div>
            </div>
        </div>
    );
}
