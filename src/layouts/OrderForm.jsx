import React, { useState } from 'react'
import ProductInfo from '../components/ProductInfo'
import SizeOption from '../components/SizeOption'
import ThicknessOption from '../components/ThicknessOption'


export default function OrderForm() {
    

  return (
    <div className="w-3/4 mx-auto flex flex-col h-screen mt-12 gap-4">
        <div>
            <ProductInfo/>
        </div>
        <div className='font-barlow font-flex flex-col space-y-10'>
            <div className="flex justify-between items-start mt-6">
                <SizeOption/>
                <ThicknessOption/>
            </div>
            <div>
                Extra Ingredient
            </div>
            <div>
                Note
            </div>
            <div>
                calculation
            </div>
        </div>
    </div>
  )
}
