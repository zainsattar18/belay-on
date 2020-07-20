import React from 'react'
import { withRouter, Link } from 'react-router-dom'


function Show() {
  return (
    <div className="wrap">
      <div className="image">
        <div className="flex justify-center">
      <div className="main">
        <div className= 'border-4 border-blue-500 max-w-sm rounded-md overflow-hidden shadow-lg mt-40 p-10'>

          <div className="font-bold text-xl mb-2">Welcome to Belay-On</div>
          <div>Click below to check out our climbs</div>
          <Link to='/states'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">Climb On</button>
          </Link>
        </div>
          </div>
          </div>
      </div>
      </div>
  )
}
export default withRouter(Show)