import axios from 'axios';
import React, { createContext } from 'react'


export const WalletApiContext = createContext() ; 
const API_URL = "https://msib-6-test-7uaujedvyq-et.a.run.app";

const WalletApiProvider = ({children}) => {

  const indexWallet = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/api/wallet`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = response.data.data
      return data
      
    }catch (error) {
      console.error('error fetch expense : ' , error) 
    }
  }

  return (
    <WalletApiContext.Provider value={{ indexWallet }}>
      {children}
    </WalletApiContext.Provider>
  )
}

export default WalletApiProvider