import React from 'react'
import belayon from '../../images/belayon.jpeg'
import { Link } from 'react-router-dom'
import copy from '../../images/copy.jpeg'


export default function header(props) {
  return (
    <div className="flex items-center justify-between">
      <div className="inline-block ml-4 mt-2">
        <Link to='/'>
          <img src={belayon} alt="Belay On Logo" width="150px" />
        </Link>
      </div>
      {props.currentUser ?
        <div>


          <div className="inline-block mb-1 rounded-full bg-gray-300 pr-6 h-20 w-auto leading-loose text-xl mr-4">
            <img className="rounded-full float-left h-full" src={copy} alt="user" />
            
            <span className="ml-3">{props.currentUser.username}</span>
            <button onClick={props.handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded-full ml-2">
                SignOut
            </button>
              
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

