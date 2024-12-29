import React from 'react'
import Header from '../layouts/Header'
import OrderForm from '../layouts/OrderForm'

export default function OrderPage() {
  return (
    <div >
      <div>
        <Header customTitle="Sipariş Sayfası"/>
      </div>
      <div >
        <OrderForm/>
      </div>
    </div>
  )
}
