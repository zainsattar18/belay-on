// import React, { Component } from 'react'
// import belayon from '../../images/belayon.jpeg'
// import {Link} from 'react-router-dom'

// export default class header extends Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//       <div>
//         <Link to='/states'>
//           <img src={belayon} alt="Belay On Logo" width="150px" />
//         </Link>
//         <Link to='/login'>
//           <button onClick={props.showModal}>Log-In</button>
//           </Link>
//       </div>
//     )
//   }
// }

import React from 'react'
import belayon from '../../images/belayon.jpeg'
import {Link} from 'react-router-dom'

export default function header(props) {
  return (
    <div>
        <Link to='/states'>
          <img src={belayon} alt="Belay On Logo" width="150px" />
        </Link>
        <Link to='/login'>
          <button onClick={props.showModal}>Log-In</button>
          </Link>
    </div>
  )
}

