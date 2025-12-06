import React from 'react'

const Orders = () => {
  const orders = [
    {
      id: 'ORD001',
      date: '2024-12-05',
      items: 'Momo (2x), Chowmein (1x)',
      total: 'Rs. 500',
      status: 'Delivered'
    },
    {
      id: 'ORD002',
      date: '2024-12-04',
      items: 'Samosa (3x), Thakali (1x)',
      total: 'Rs. 400',
      status: 'Delivered'
    },
    {
      id: 'ORD003',
      date: '2024-12-03',
      items: 'Sushi (1x)',
      total: 'Rs. 700',
      status: 'Processing'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No orders yet. Start ordering now!
          </p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Order {order.id}</p>
                    <p className="text-gray-600 text-sm">{order.date}</p>
                  </div>
                  <span className={`px-4 py-2 rounded font-medium ${
                    order.status === 'Delivered' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{order.items}</p>
                
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-gray-800">{order.total}</p>
                  {order.status === 'Delivered' ? (
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-medium">
                      Reorder
                    </button>
                  ) : (
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium">
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders