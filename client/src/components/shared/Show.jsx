import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import show from '../../images/show.jpg'

function Show() {
  return (
    <div className="show">
      {/* <img src={show} alt="main image" width="250px"/> */}
      <Link to='/states'>
        <h1>Welcome to Belay-On</h1>
        </Link>
    </div>
  )
}
export default withRouter(Show)