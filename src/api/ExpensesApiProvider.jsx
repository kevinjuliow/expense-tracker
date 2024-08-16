import axios from 'axios';
import React, { createContext } from 'react'

const API_URL = "https://msib-6-test-7uaujedvyq-et.a.run.app";


export const ExpensesApiContext = createContext();

const ExpensesApiProvider = ({children}) => {

  const indexExpenses = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/api/expense`, {
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
    <ExpensesApiContext.Provider value={{ indexExpenses }}>
      {children}
    </ExpensesApiContext.Provider>
  )
}

export default ExpensesApiProvider