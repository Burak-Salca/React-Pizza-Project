import React from 'react'

export default function OrderApply(props) {
  const {handleSubmit,extraPrice,totalPrice}=props;
  return (
    <div className="flex flex-col gap-4 border border-gray p-4 rounded-md w-1/2">
        <h2 className=" font-bold text-darkGray text-[22px]">Sipariş Toplamı</h2>
        <div className="flex justify-between">
            <p className="font-bold text-[18px] text-lightGray">Seçimler</p>
            <div>{extraPrice}₺</div>
        </div>
        <div className="flex justify-between">
            <p className="font-bold text-[18px] text-red">Toplam</p>
            <div>{totalPrice}₺</div>
        </div>
        <button className='bg-yellow text-[22px] font-bold text-darkGray rounded-md p-4' onClick={handleSubmit} >
            Sipariş Ver
        </button>
         
    </div>
  )
}
