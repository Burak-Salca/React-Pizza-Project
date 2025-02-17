import React from 'react'
import { useLocation, Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header({ customTitle }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

  return (
    <header className="relative w-full h-[207px] bg-red">
      <div className="w-full h-full flex flex-col justify-center items-center px-4">
        <img 
          className="h-auto mb-12" 
          src="/images/iteration-1-images/logo.svg" 
          alt="Logo"
        />
        <nav className="absolute bottom-4 left-4 flex items-center gap-2 w-full px-4">
          <Link to="/" className={`text-white font-barlow ${isActive('/') ? 'font-bold' : ''} hover:font-bold`}>
            Ana Sayfa
          </Link>
          <span className="text-white text-lg font-bold font-barlow">-</span>
          <span className={`text-lg font-bold font-barlow ${isActive('/orderPage') ? 'font-bold' : 'text-white'}`}>
            {customTitle}
          </span>
        </nav>
      </div>
    </header>
  )
}
