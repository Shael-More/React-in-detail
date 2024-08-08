import React from 'react'
import UserContainer from './UserContainer'

function NavLinks() {
  return (
    <div className='flex'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>

        <UserContainer />
    </div>
  )
}

export default NavLinks