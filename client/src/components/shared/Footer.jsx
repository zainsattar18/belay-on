import React from 'react'
import belayextra from '../../images/belayextra.jpg'
import github from "../../images/github.jpeg"
import linkedin from '../../images/linkedin.png'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <div className="bg-gray-300 flex items-center justify-between">

      <div className="inline-block m-1">&copy; Zain Sattar 2020 </div>

      <div className="inline-block m-1">
        <img src={belayextra} alt="carabiner" width="80px" />
      </div>
      <div className="inline-block">
        <div className="inline-block m-1">
      <Link to='https://github.com/zainsattar18'>
        <img src={github} alt="github" width="20px" />
        </Link>
      </div>
      <div className="inline-block m-1">
      <Link to="https://www.linkedin.com/in/zain-sattar-0368611b0/">
        <img src={linkedin} alt="linkedin" width="20px" />
          </Link>
          </div> 
    </div>
    </div>
  )
}
