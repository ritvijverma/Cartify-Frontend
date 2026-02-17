import React, { useEffect } from 'react'
import {useState, useContext, createContext} from 'react'
import axios from "axios";
import { useLocation } from 'react-router-dom';

const AuthContext = createContext()


const AuthProvider = ({children}) => {
  
const [auth, setAuth] = useState(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      axios.defaults.headers.common["Authorization"] = parseData.token;
      return {
        user: parseData.user,
        token: parseData.token,
      };
    }
    return {
      user: null,
      token: "",
    };
  });
  
  // Update axios header when auth changes
  useEffect(() => {
      if (auth?.token) {
          axios.defaults.headers.common["Authorization"] = auth.token;
      }
  }, [auth?.token]);


  // No need to re-read localStorage on mount as we do it synchronously.
  // eslint-disable-next-line
  // useEffect moved to sync axios headers above

  return (
<AuthContext.Provider value={[auth, setAuth]}>
  {children}
</AuthContext.Provider>

  )
}

//custom hook 

const useAuth = ()  => useContext(AuthContext)

export {useAuth, AuthProvider}