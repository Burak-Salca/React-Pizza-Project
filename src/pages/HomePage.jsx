import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function HomePage() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/order'); 
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/iteration-1-images/home-banner.png')",
    }}>
      <img className=" h-auto mt-12 mb-4"
        src="/images/iteration-1-images/logo.svg"
        alt="Logo"/>
      <img className=" h-auto mb-4" 
        src="images\iteration-1-images\Group 4.svg"
        alt="Logo"/>
      <button onClick={handleClick} className="w-[193.27px] h-[56px] bg-yellow rounded-3xl text-black font-bold">
        SİPRAİŞ VER
      </button>
    </div>
  )
}
