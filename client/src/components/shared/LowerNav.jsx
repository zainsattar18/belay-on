import React from 'react'

function LowerNav() {
  return (
    <div className="bg-indigo-900 text-center py-8 lg:px-4">
      <div className="text-gray-100 hover:text-blue-300 flex items-center justify-around p-6">About : Free Stickers : Contact Us</div>
  <div className="flex items-center justify-around">
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded p-2 m-4">Download on the AppStore</button>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded p-2 m-4">Get it on Google Play</button>
      </div>
    </div>
  )
}

export default LowerNav