import React from 'react'
import { withRouter, Link } from 'react-router-dom'
// import USAMap from 'react-usa-map'


function States(props) {

  const stateLinks = props.allStates.map(state => {
    console.log (state.state)
  })

  const mapHandler = (e) => {
    alert(e.target.dataset.name)
  }

  // console.log(props.allStates) 
  return (
    <div>

      {/* <USAMap onClick={mapHandler}/> */}
      <div className="bg-gray-200">
        
        {props.allStates.map(data => {
          return <Link to={`/states/${data.id}/climbs`} key={data.id}>
            <div className="flex inline-flex">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-40 m-2 flex-row">
                {data.state}
              </button>
            </div>
          </Link>
        })}
      

      </div>
    </div>
  )
}

export default withRouter(States)