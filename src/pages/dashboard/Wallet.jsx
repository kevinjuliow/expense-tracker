import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Wallet = () => {
  const { api } = useOutletContext();
  const [wallet, setWallet] = React.useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const data = await api.indexWallet(token);
        setWallet(data);
      } catch (error) {
        console.error("Error fetching wallet:", error);
      }
    };
    fetchWallet();
  }, [api, token]);

  return (
    <div className="bg-slate-200 h-full w-full p-10 relative">
      <p className="text-3xl font-medium mb-20">My Wallet</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 h-[80%] w-full overflow-y-auto">
        {wallet.map((walletItem, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md w-62 relative h-60 cursor-pointer hover:shadow-slate-800 transition-shadow"
            onClick={()=>{navigate(`/dashboard/wallet/${walletItem.id}`)}}
          >
            <h3 className="text-xl font-bold mb-2">{walletItem.name}</h3>
            <p className="text-gray-600 text-sm absolute bottom-8">
              <span> created at:</span> <br />
              {walletItem.created_at}
            </p>
          </div>
        ))}
      </div>
      <a href="wallet/create" className="absolute bottom-8 left-20 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 h-10 w-28 flex justify-center items-center rounded-lg">
      <button >
        New Wallet
      </button>
      </a>
     
    </div>
  );
};

export default Wallet;
