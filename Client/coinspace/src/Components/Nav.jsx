import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

function Nav() {
  return (
   <>
   <nav className='navBar'>
    <div className='logo'>
        <img src={logo} alt="" className='logoImg' />
        <Link to="" className='text-xl'> Coinex</Link>
    </div>
        

        <Link to="/login" className='loginButton'>Login</Link>
      </nav>
   </>
  )
}

export default Nav
