import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Expenses = () => {
  const { api } = useOutletContext();
  const [expenses, setExpenses] = React.useState([]);
  const token = localStorage.getItem("token");

  useEffect(()=>{
    const fetchExpenses = async () => {
      try {
        const data = await api.indexExpenses(token);
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchExpenses()
  } , [api , token])

  const handleRemove = async(id) =>{
    await api.deleteExpenses(token , id)
  }
  
  return (
    <div className="bg-slate-200 h-full w-full">
      <p className="text-3xl font-medium p-20">My Expenses</p>
      <div className="flex flex-col items-center w-full h-[80%]">
        <div className="bg-slate-100 w-[90%] rounded-3xl p-10 h-96 mb-10 overflow-y-auto">
          <ul className="relative"> 
            {expenses.map((expense, index) => (
              <div key={index}>
                <li
                className="flex mt-2 justify-between border-b-2 pb-2 relative"
              >
                <div>
                  <p>{expense.name}</p>
                  <p className="text-sm font-extralight">{expense.time}</p>
                </div>
                <div className="flex gap-20">
                  <div>
                  <p className="text-red-500">{expense.amount}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                  <button
                    onClick={() => handleRemove(expense.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                  <button
                    // onClick={() => handleUpdate(expense)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                </div>
                </div>
              </li>
              </div>
            
            ))}
          </ul>
        </div>
    
      </div>
    </div>
  );
};

export default Expenses;
