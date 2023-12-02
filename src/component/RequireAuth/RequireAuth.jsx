import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Landing, Home } from '../index.js'
import { auth } from '../../firebase.js'

const RequireAuth = () => {
  const [ user ] = useAuthState(auth);

  return (
    user ? <Home /> : <Landing />
  )
}

export default RequireAuth