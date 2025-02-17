import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../layouts/Header';

export default function SuccessPage() {
  const location = useLocation();
  const orderData = location.state?.orderData;

  return (
    <div className="min-h-screen bg-red">
      <Header className="px-4 " customTitle="Sipariş Onay" />
      <div className="flex flex-col justify-center items-center px-4 py-4 md:py-8">
        <h1 className='font-satisfy text-yellow text-[28px] md:text-[36px] text-center mt-4'>
          lezzetin yolda
        </h1>
        <h1 className='font-roboto text-white font-thin text-[45px] md:text-[75px] text-center leading-tight'>
          SİPARİŞ ALINDI
        </h1>
        <div className="w-full md:w-3/4 h-0.5 bg-white mt-1" />
        
        {orderData && (
          <div className="mt-8 text-white text-base md:text-lg text-center w-full max-w-md px-4">
            <p className='mb-6 md:mb-10'><strong>{orderData.isim}</strong></p>
            <p className='mb-2'>Boyut: <strong>{orderData.boyut}</strong></p>
            <p className='mb-2'>Hamur: <strong>{orderData.kalınlık}</strong></p>
            <p className='mb-2'>Malzemeler: <strong>{orderData.malzemeler.join(', ')}</strong></p>
            <p className='mb-4'>Özel Not: <strong>{orderData.özel}</strong></p>
            
            <div className="border-2 border-white p-4 md:p-6 rounded-lg mt-4 mx-auto">
              <h1 className="text-white text-lg md:text-xl font-bold mb-2">Sipariş Toplamı</h1>
              <p className="text-white mb-2">Toplam Fiyat: <strong>{orderData.toplamFiyat} TL</strong></p>
              <p className="text-white">Miktar: <strong>{orderData.miktar} Adet</strong></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

