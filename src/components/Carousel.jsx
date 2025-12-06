import React from 'react'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Carousel = ({ items }) => {
  if (items.length === 0) return null

  return (
    <div className="mx-auto max-w-3xl rounded-lg overflow-hidden shadow-lg">
      <ResponsiveCarousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
      >
        {items.map((item, index) => (
          <div key={index} className="h-72 md:h-96 lg:h-[560px] overflow-hidden bg-gray-100">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  )
}

export default Carousel
