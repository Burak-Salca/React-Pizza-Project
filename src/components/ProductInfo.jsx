import React from 'react'

export default function ProductInfo() {
  return (
    <div className='font-barlow flex flex-col gap-7'>
        <h1 className='font-medium text-[22px]'>Position Absolute Acı Pizza</h1>
        <div className="flex justify-between items-center ">
            <div className='font-bold text-[28px]'>
                85.50₺
            </div>
            <div className="flex justify-between items-center text-lightGray text-[22px] gap-12">
                <div>
                    4,9
                </div>
                <div>
                    (200)
                </div>
            </div>
        </div>  
        <p className='text-lightGray'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
    </div>
  )
}