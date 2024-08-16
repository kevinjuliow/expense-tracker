import axios from 'axios';
import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = "https://msib-6-test-7uaujedvyq-et.a.run.app";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const navigate = useNavigate() 


  /** AUTH API*/
  const register = async (name , email , password , password_confirmation) => {
    try {
      const response =  await axios.post(`${API_URL}/api/register` , {
        "name" : name , 
        "email" : email ,
        "password" : password  , 
        "password_confirmation" : password_confirmation
      })
      console.log(response.data);
      navigate('/login')
    }catch (error) {
      console.error('register error : ' , error) 
    }
  }
  
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        "email" : email,
        "password" : password,
      });
  
      const data = response.data; 
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    
    } catch (error) {
      console.error('Login Error :', error);
      return null;
    }
  };


  const logout = () => {
    localStorage.clear()
  };



  return (
    <ApiContext.Provider value={{ login, logout , register }}>
      {children}
    </ApiContext.Provider>
  );
};
