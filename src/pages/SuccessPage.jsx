import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../layouts/Header';


export default function SuccessPage() {
  const location = useLocation();
  const orderData = location.state?.orderData;

  return (
  <div>
    <Header customTitle="Sipariş Onay" />
    <div className=" h-screen bg-red  flex flex-col justify-center items-center" >
      <h1 className='font-satisfy text-yellow text-[36px]
      '>lezzetin yolda</h1>
      <h1 className='font-roboto text-white font font-thin text-[75px]'>SİPARİŞ ALINDI</h1>
      <div className="w-3/4 h-0.5 bg-white mt-1 font-barlow" />
      {orderData && (
          <div className="mt-8 text-white text-lg text-center">
            <p className='mb-10'><strong>{orderData.isim}</strong></p>
            <p>Boyut: <strong>{orderData.boyut}</strong></p>
            <p>Hamur: <strong>{orderData.kalınlık}</strong></p>
            <p>Malzemeler: <strong>{orderData.malzemeler.join(', ')}</strong></p>
            <p>Özel Not: <strong>{orderData.özel}</strong></p>
            <div className="border-2 border-white p-6 rounded-lg mt-4">
              <h1 className="text-white text-xl font-bold mb-2">Sipariş Toplamı</h1>
              <p className="text-white">Toplam Fiyat: <strong>{orderData.toplamFiyat} TL </strong></p>
              <p className="text-white">Miktar: <strong>{orderData.miktar} Adet </strong></p>
            </div>
          </div>
        )}
    </div>
  </div>
  );
}

