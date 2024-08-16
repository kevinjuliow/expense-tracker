import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const CreateExpense = () => {
  const token = localStorage.getItem("token");
  const { api } = useOutletContext();

  const [name, setName] = useState('');
  const [category_id, setCategoryId] = useState('');
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');
  const [categories, setCategories] = useState([]);
  const [walletList, setWalletList] = useState([]);
  const [walletId, setWalletId] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await api.indexCategory(token);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchWallet = async () => {
      try {
        const data = await api.indexWallet(token);
        setWalletList(data);
      } catch (error) {
        console.error("Error fetching wallets:", error);
      }
    };

    fetchCategories();
    fetchWallet();
  }, [api, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const parsedCategoryId = parseInt(category_id, 10);

      
      const formattedTime = new Date(time).toISOString().slice(0, 19).replace('T', ' ');

      const response = await api.storeExpenses(
        token,
        name,
        parsedCategoryId,  
        amount,
        formattedTime,  
        walletId,
      );
      console.log("Expense created:", response.data);
    } catch (error) {
      console.error("Error creating expense:", error);
    }
  };

  return (
    <div className="bg-slate-200 h-full w-full p-10">
      <p className="text-3xl font-medium mb-6">Create New Expense</p>
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter expense name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            value={category_id}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter amount"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Time
          </label>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Wallet
          </label>
          <select
            value={walletId}
            onChange={(e) => setWalletId(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
            disabled={walletList.length === 0}
          >
            <option value="" disabled>Select a wallet</option>
            {walletList.map(wallet => (
              <option key={wallet.id} value={wallet.id}>
                {wallet.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Expense
        </button>
      </form>
    </div>
  );
};

export default CreateExpense;
