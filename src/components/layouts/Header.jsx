import React from 'react'
import { Link } from 'react-router-dom'
import foodLogo from '../../assets/food-logo.png'
import { BiLogInCircle } from 'react-icons/bi';
import { CgLogIn } from 'react-icons/cg';
import { RiAccountCircle2Fill } from 'react-icons/ri';

const Header = () => {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition shrink-0 mr-4">
          <img src={foodLogo} alt="Food Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-gray-800">FoodZone</h1>
        </Link>

        
        <div className="ml-auto flex gap-4 md:gap-8 items-center">
          <Link to="/" className="text-gray-800 hover:text-indigo-600 font-medium transition">Home</Link>
          <Link to="/orders" className="text-gray-800 hover:text-indigo-600 font-medium transition">Orders</Link>
          <Link to="/contact" className="text-gray-800 hover:text-indigo-600 font-medium transition">Contact</Link>
          <Link to="/login" className="text-gray-800 hover:text-indigo-600 font-medium transition text-2xl"><RiAccountCircle2Fill /></Link>
        </div>
      </nav>
      <div className="h-16" />
    </header>
  );
}

export default Header