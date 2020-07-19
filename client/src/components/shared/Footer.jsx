import React from 'react'
import belayextra from '../../images/belayextra.jpg'
import github from "../../images/github.jpeg"
import linkedin from '../../images/linkedin.png'
import {Link} from 'react-router-dom'

export default function footer() {
  return (
    <div>
      <div>&copy; Zain Sattar 2020
       <img src={belayextra} alt="carabiner" width="75px"/>
        <Link to='https://github.com/zainsattar18'>
          <img src={github} alt="github" width="10px"/>
        </Link>
        <Link to="https://www.linkedin.com/in/zain-sattar-0368611b0/">
        <img src={linkedin} alt="linkedin" width="10px"/>
        </Link>
      </div>
    </div>
  )
}
