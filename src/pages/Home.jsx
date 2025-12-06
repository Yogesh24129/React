import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Carousel from '../components/Carousel'
import momoImage from '../assets/momo.jpeg'
import samosaimage from '../assets/samosa.jpeg'
import Chowmeinimage from '../assets/chowmein.jpeg'
import Thakaliimage from '../assets/thakali.jpeg'
import sushiimage from '../assets/sushi.jpeg'
import omuriceimage from '../assets/omurice.jpeg'
import chickenimage from '../assets/chickenleg.webp'

const Home = () => {
  const [query, setQuery] = useState('')
  const recentSearches = useSelector((state) => state.recentSearches || [])
  const dispatch = useDispatch()

  const highlightedFoods = [
    {
      image: momoImage,
    },
    {
      image: samosaimage,
    },
    {
      image: Chowmeinimage,
    },
    {
      image: Thakaliimage,
    }
  ]

  return (
    <div className="min-h-screen bg-white">

      <section className="py-6 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search food..."
                className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-yellow-500"
              />
              <button
                onClick={() => {
                  const q = query.trim()
                  if (!q) return
                  dispatch({ type: 'ADD_SEARCH', payload: q })
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-r font-medium"
              >
                Search
              </button>
            </div>

            {recentSearches && recentSearches.length > 0 && (
              <div className="mt-3 bg-white border border-gray-200 rounded shadow-sm p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Recent searches</p>
                  <button
                    onClick={() => dispatch({ type: 'CLEAR_SEARCHES' })}
                    className="text-xs text-gray-500 hover:underline"
                  >
                    Clear
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuery(s)}
                      className="text-sm px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <Carousel items={highlightedFoods} />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Featured Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-300">
              <img
                src={sushiimage}
                alt="Sushi"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sushi</h3>
                <p className="text-gray-600 mb-4">
                  Classic Japanese dish with fresh fish and rice.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                  Order Now
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-300">
              <img
                src={omuriceimage}
                alt="Omurice"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Omurice</h3>
                <p className="text-gray-600 mb-4">
                  Delicious Japanese omelette filled with fried rice.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                  Order Now
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-300">
              <img
                src={chickenimage}
                alt="Chicken"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chicken </h3>
                <p className="text-gray-600 mb-4">
                  Freshly prepared chicken with a variety of spices and herbs.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home