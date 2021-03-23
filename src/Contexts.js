import React,{ createContext, useState, useContext } from 'react'

const TokenContext = createContext()


export default function TokenProvider({ children }) {
    const [token, setToken] = useState(null);
  
    return (
      <TokenContext.Provider
        value={{
            token,
          setToken
        }}
      >
        {children}
      </TokenContext.Provider>
    );
  }
  
  export function useToken() {
    const context = useContext(TokenContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { token, setToken } = context;
    console.log(token)
    return { token, setToken };
  }