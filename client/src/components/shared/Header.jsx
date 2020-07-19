import React from 'react'
import belayon from '../../images/belayon.jpeg'
import {Link} from 'react-router-dom'

export default function header(props) {
  return (
    <div className="flex items-center justify-between">
    <div className="inline-block m-1">
        <Link to='/'>
          <img src={belayon} alt="Belay On Logo" width="150px" />
        </Link>
        </div>
      {props.currentUser ?
        <div>
        
          <button onClick={props.handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 border border-blue-700 rounded mr-1">Logout</button>
          <div>Welcome {props.currentUser.username}</div>
        </div>
        :
        <Link to='/login'> 
          <button onClick={props.showModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 border border-blue-700 rounded mr-2">Log-In</button>
      </Link> 
        
          }
      </div>
      
  )
}

