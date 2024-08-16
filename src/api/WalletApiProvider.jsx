import axios from 'axios';
import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom';


export const WalletApiContext = createContext() ; 
const API_URL = "https://msib-6-test-7uaujedvyq-et.a.run.app";

const WalletApiProvider = ({children}) => {
  const navigate = useNavigate() 

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

  const showWallet = async (token , id) => {
    try {
      const response = await axios.get(`${API_URL}/api/wallet/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = response.data
      return data
      
    }catch (error) {
      console.error('error : ' , error) 
    }
  }

  

  const createWallet = async (token , name) => {
    try {
      await axios.post(`${API_URL}/api/wallet`, {
        "name" : name
      } ,  {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Wallet Created");
      navigate('/dashboard/wallet')
    }catch (error) {
      console.error('error  : ' , error) 
    }
  }
  const updateWallet = async (token , id , name) => {
    try {
      await axios.put(`${API_URL}/api/wallet/${id}`, {
        "name" : name
      } ,  {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate('/dashboard/wallet')
    }catch (error) {
      console.error('error  : ' , error) 
    }
  }

  const deleteWallet = async (token , id ) => {
    try {
      await axios.delete(`${API_URL}/api/wallet/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate('/dashboard/wallet')
    }catch (error) {
      console.error('error  : ' , error) 
    }
  }


  return (
    <WalletApiContext.Provider value={{ indexWallet , showWallet , updateWallet , deleteWallet , createWallet}}>
      {children}
    </WalletApiContext.Provider>
  )
}

export default WalletApiProvider