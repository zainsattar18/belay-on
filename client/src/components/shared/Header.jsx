import React from 'react'
import belayon from '../../images/belayon.jpeg'
import {Link} from 'react-router-dom'

export default function header(props) {
  return (
    <div>
        <Link to='/'>
          <img src={belayon} alt="Belay On Logo" width="150px" />
        </Link>
      {props.currentUser ?
        <div>
        
          <button onClick={props.handleLogout}>Logout</button>
          <div>Welcome {props.currentUser.username}</div>
        </div>
        :
        <Link to='/login'> 
          <button onClick={props.showModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log-In</button>
      </Link> 
        
          }
    </div>
  )
}

