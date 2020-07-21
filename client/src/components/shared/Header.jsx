import React from 'react'
import belayon from '../../images/belayon.jpeg'
import { Link } from 'react-router-dom'
import copy from '../../images/copy.jpeg'


export default function header(props) {
  return (
    <div className="flex items-center justify-between">
      <div className="inline-block mt-3 ml-3 h-20 w-20 md:h-auto md:w-auto md:ml-4 md:mt-2">
        <Link to='/'>
          <img src={belayon} alt="Belay On Logo" width="150px" />
        </Link>
      </div>
      {props.currentUser ?
        <div>


          <div className="inline-block mb-6 rounded-full bg-gray-300 pr-1 h-10 w-48 md:pr-5 md:h-16 md:w-auto md:leading-10 md:text-xl md:bg-orange-300 md:mr-3">
            <img className="rounded-full float-left h-full" src={copy} alt="user" />
            <div className="flex py-2 md:pt-3">
            <span className="ml-1 text-sm md:ml-3 md:text-lg">{props.currentUser.username}</span>
            <button onClick={props.handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white text-small font:medium py-0 px-1 rounded-full ml-1 md:ml-2 md:font-bold">
                SignOut
            </button>
             </div> 
          </div>
        </div>

        :
        <Link to='/login'>
          <button onClick={props.showModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 border border-blue-700 rounded mr-2">Log-In</button>
        </Link>

      }

    </div>

  )
}

