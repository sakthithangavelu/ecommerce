import React from 'react'
import Home from './Home';
import SignIn from './SignIn';


const useAuth =() => {
    const user = {loggedIn: false}
    return user && user.loggedIn;
}
const ProRoutes = () => {
    const isAuth = useAuth();
  return isAuth? <SignIn/> : <Home/>
}

export default ProRoutes