import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import foodLogo from '../../assets/food-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={foodLogo} alt="Food Logo" className="w-8 h-8" />
            <h2 className="text-2xl font-bold text-white">FoodZone</h2>
          </div>
          <p className="text-gray-400">
            Your favorite meals delivered hot and fresh.  
            Eat healthy, stay happy!
          </p>

          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <FaFacebookF className="w-4 h-4" />
            </a>

            <a href="https://www.instagram.com" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <FaInstagram className="w-4 h-4" />
            </a>

            <a href="https://www.twitter.com" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>


        <div className="md:col-start-4">
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Dhapakhel,Lalitpur</p>
          <p className="text-gray-400">+977 9847392216</p>
          <p className="text-gray-400">support@foodzone.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2022 FoodZone — All Rights Reserved.
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer