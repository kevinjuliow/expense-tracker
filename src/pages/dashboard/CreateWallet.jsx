import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const CreateWallet = () => {
  const [name, setName] = useState("");
  const { api } = useOutletContext();
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const handleCreate = async (event) => {
    event.preventDefault();
    setIsCreating(true);
    setError(null);

    try {
      await api.createWallet(token, name );
    } catch (error) {
      console.error("Error creating wallet:", error);
      setError("Failed to create wallet.");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="bg-slate-200 h-full w-full p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Create Wallet</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-4 mb-4 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleCreate}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-white border-blue-300 focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              disabled={isCreating}
            >
              {isCreating ? "Creating..." : "Create Wallet"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWallet;
