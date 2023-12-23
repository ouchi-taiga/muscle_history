import React, {useState, useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Landing, Home } from '../index.js'
import { auth } from '../../firebase.js'
import { onAuthStateChanged } from 'firebase/auth'

const RequireAuth = () => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
    });
  }, [])

  return (
    <>
    {!loading && (
      <>
      {!user ? (
        <Landing />
      ) : (
        <Home />
      )}
      </>
    )}
    </>
  )
}

export default RequireAuth