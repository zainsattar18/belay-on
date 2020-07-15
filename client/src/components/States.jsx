import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function States(props) {


  // const stateLinks = props.allStates.map(data => {
  //   return <Link to={`/states/${data.id}`} key={data.id}>
  //   <div>{data.state}</div>
  // </Link>
  // })
  
  
  return (
    <div>
      <div className="states">
        {/* {stateLinks} */}
        {props.allStates.map(data => {
          return <Link to={`/states/${data.id}/climbs`} key={data.id}>
            <div>{data.state}</div>
          </Link>
        })}
        
      </div>
    </div>
  )
}

export default withRouter (States)