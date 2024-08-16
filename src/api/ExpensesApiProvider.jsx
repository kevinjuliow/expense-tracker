import axios from 'axios';
import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom';

const API_URL = "https://msib-6-test-7uaujedvyq-et.a.run.app";


export const ExpensesApiContext = createContext();

const ExpensesApiProvider = ({children}) => {
  const navigate = useNavigate();

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

  const storeExpenses = async (token, name, category_id, amount, time, id) => {
    try {
     
      const formattedAmount = parseFloat(amount).toFixed(2);
  
      const response = await axios.post(`${API_URL}/api/wallet/${id}/expense`, {
        "name": name,
        "category_id": parseInt(category_id, 10),
        "amount": formattedAmount,
        "time": time 
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      console.log(response.data);
      navigate('/dashboard/expenses');
    } catch (error) {
      console.error('Error creating expense:', error.response?.data || error.message);
    }
  };

  const deleteExpenses = async (token , id) =>{
    try {
      const response = await axios.delete(`${API_URL}/api/expense/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      navigate('/dashboard/expenses')
    
    }catch (error) {
      console.error('error : ' , error) 
    }
  }

  const showExpense = async (token , id) =>{
    try {
      const response = await axios.get(`${API_URL}/api/expense/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data;
      return data
    
    }catch (error) {
      console.error('error : ' , error) 
    }
  }

  const updateExpenses = async (token, name, category_id, amount, time, id) => {
    try {
     
      const formattedAmount = parseFloat(amount).toFixed(2);
  
      const response = await axios.put(`${API_URL}/api/expense/${id}`, {
        "name": name,
        "category_id": parseInt(category_id, 10),
        "amount": formattedAmount,
        "time": time 
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      console.log(response.data);
      navigate('/dashboard/expenses');
    } catch (error) {
      console.error('Error creating expense:', error.response?.data || error.message);
    }
  };

  

  return (
    <ExpensesApiContext.Provider value={{ indexExpenses , storeExpenses , deleteExpenses , showExpense , updateExpenses}}>
      {children}
    </ExpensesApiContext.Provider>
  )
}

export default ExpensesApiProvider