import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  const [complaint, setComplaint] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setComplaint('')
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

            <div className="flex gap-4">
              <FaPhone className="text-yellow-500 text-2xl mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">+977 9847392216</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="text-yellow-500 text-2xl mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">foodzone@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Dhapkehel, Lalitpur</p>
                <p className="text-gray-600">Nepal</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaClock className="text-yellow-500 text-2xl mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Hours</p>
                <p className="text-gray-600">Mon - Fri: 10:00 AM - 10:00 PM</p>
                <p className="text-gray-600">Sat - Sun: 11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Complaint</h2>

            {submitted && (
              <div className="bg-green-100 text-green-800 p-4 rounded mb-6 font-medium">
                Thank you! We received your complaint. We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block font-medium text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="complaint" className="block font-medium text-gray-800 mb-2">
                  Your Complaint
                </label>
                <textarea
                  id="complaint"
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  required
                  placeholder="Please describe your issue or complaint..."
                  rows="6"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded"
              >
                Submit Complaint
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact