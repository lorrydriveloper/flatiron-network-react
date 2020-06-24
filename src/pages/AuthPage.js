import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

export default function Authpage(props) {
  return (
    <div>
      <Login {...props}/>
      <SignUp {...props}/>
    </div>
  )
}
