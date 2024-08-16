import React, { useContext, useEffect, useState } from "react";
import { SideNav } from "../../components/SideNav";
import { ExpensesApiContext } from "../../api/ExpensesApiProvider";
import { WalletApiContext } from "../../api/WalletApiProvider";
import { Outlet, useNavigate } from "react-router-dom";
import { ApiContext } from "../../api/ApiProvider";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const { indexExpenses , storeExpenses , deleteExpenses , showExpense , updateExpenses} = useContext(ExpensesApiContext);
  const { indexWallet , showWallet , updateWallet , deleteWallet  ,createWallet} = useContext(WalletApiContext);
  const {indexCategory} = useContext(ApiContext)

  const api = { indexExpenses, indexWallet , indexCategory , storeExpenses , 
    deleteExpenses , showWallet , updateWallet , deleteWallet , createWallet , showExpense , updateExpenses};
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = JSON.parse(localStorage.getItem("user"));
    checkUser && setUser(checkUser);

    if (window.location.pathname === "/dashboard") {
      navigate("home");
    }
  }, [navigate]);

  return (
    <div className="bg-slate-100">
      <div className="w-[1400px] m-auto flex">
        <SideNav user={user} />
        <div className="pt-12 ml-10 w-full h-[95vh]">
        <Outlet context={{ user, api }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
