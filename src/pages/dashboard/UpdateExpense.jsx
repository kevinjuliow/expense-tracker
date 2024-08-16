import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';

const UpdateExpense = () => {
  const { id } = useParams();
  const { api } = useOutletContext();
  const [name, setName] = useState('');
  const [category_id, setCategoryId] = useState('');
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const data = await api.showExpense(token, id);
        setName(data.name);
        setCategoryId(data.category_id.toString()); // Convert to string for select input
        setAmount(parseFloat(data.amount).toFixed(2)); // Ensure two decimal places
        setTime(data.time);
      } catch (error) {
        console.error("Error fetching expense:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await api.indexCategory(token);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchExpense();
    fetchCategories();
  }, [api, token, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedAmount = parseFloat(amount).toFixed(2);
      await api.updateExpenses(
        token , 
        name,
        category_id,
        formattedAmount,
        time,
        id 
      , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Expense updated");
      navigate('/dashboard/expenses');
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  return (
    <div className="bg-slate-200 h-full w-full p-10">
      <p className="text-3xl font-medium mb-6">Update Expense</p>
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

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Expense
        </button>
      </form>
    </div>
  );
};

export default UpdateExpense;
