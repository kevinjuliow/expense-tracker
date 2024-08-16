import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const HomeDash = () => {
  const [expenses, setExpenses] = useState([]);
  const [wallet, setWallet] = useState([]);

  const { user, api } = useOutletContext(); 

  const displayedExpenses = expenses.length > 3 ? expenses.slice(0, 3) : expenses;
  const displayedWallet = wallet.length > 3 ? wallet.slice(0, 3) : wallet;

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await api.indexExpenses(token);
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    const fetchWallet = async () => {
      try {
        const data = await api.indexWallet(token);
        console.log("Fetched expenses:", data);
        setWallet(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
    fetchWallet();
  }, [api, token ]);

  return (
    <div className="bg-slate-200 h-full w-full">
      <div className="flex flex-col p-10">
        <div className="flex">
          {/* Profile */}
          
          <section className="bg-slate-100 h-80 w-[40%] rounded-3xl p-10">
            {user ? (
              <>
                <p className="font-medium text-3xl">Welcome, {user.name}</p>
                <p className="my-2 mb-8 font-light">{user.email}</p>

                <div className="mb-2">
                  <p className="font-medium">Account Created at</p>
                  <p className="font-light text-xs">{user.created_at}</p>
                </div>

                {user.email_verified_at && (
                  <>
                    <p className="font-medium">Email verified at</p>
                    <p className="font-light text-xs">
                      {user.email_verified_at}
                    </p>
                  </>
                )}
              </>
            ) : (
              <p className="font-medium text-2xl">User information not available</p>
            )}
          </section>
          <section className="bg-slate-100 h-80 w-[60%] rounded-3xl p-10 ml-8 relative">
            <p className="font-medium text-3xl">Recent Expenses</p>
            {displayedExpenses.length > 0 ? (
              <div>
                <ul>
                  {displayedExpenses.map((expense, index) => (
                    <li
                      key={index}
                      className="flex mt-2 justify-between border-b-2 pb-2"
                    >
                      <div>
                        <p>{expense.name}</p>
                        <p className="text-sm font-extralight">
                          {expense.time}
                        </p>
                      </div>
                      <div>
                        <p className="text-red-500">{expense.amount}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a  href="/dashboard/expenses" className="absolute bottom-4 hover:underline text-sm text-blue-400 cursor-pointer">
                  See Details
                </a>
              </div>
            ) : (
              <div className="flex justify-center h-[80%] w-full items-center">
                <p className="font-extralight">No expenses found.</p>
              </div>
            )}
          </section>
        </div>

        <div>
          <section className="bg-slate-100 h-80 w-[100%] rounded-3xl p-10 mt-12 relative">
            <p className="font-medium text-3xl mb-4">My Wallet</p>

            {displayedWallet.length > 0 ? (
              <ul>
                {displayedWallet.map((wallet, index) => (
                  <li
                    key={index}
                    className="flex mt-2 justify-between border-b-2 pb-2"
                  >
                    <div>
                      <p className="text-green-500">{wallet.name}</p>
                      <p className="text-sm font-extralight">
                        {wallet.created_at}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex justify-center h-[80%] w-full items-center">
                <p className="font-extralight">No Wallet found.</p>
              </div>
            )}
             <a href='/dashboard/wallet' className="absolute bottom-4 hover:underline text-sm text-blue-400 cursor-pointer">
                  See Details
              </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
