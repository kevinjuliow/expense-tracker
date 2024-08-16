import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const ShowWallet = () => {
  const { id } = useParams();
  const [wallet, setWallet] = useState({});
  const { api } = useOutletContext();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const data = await api.showWallet(token, id);
        setWallet(data);
      } catch (error) {
        console.error("Error fetching wallet:", error);
        setError("Failed to fetch wallet details.");
      }
    };
    fetchWallet();
  }, [api, token, id]);

  const handleUpdate = async () => {
    if (!isUpdating) {
      setIsUpdating(true);
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      await api.updateWallet(token, id, wallet.name);
      setIsUpdating(false);
      setError(null); 
    } catch (error) {
      console.error("Error updating wallet:", error);
      setError("Failed to update wallet.");
    } finally {
      setIsSaving(false);
    }
  };


  const handleDelete = async () =>{
    await api.deleteWallet(token , id)
  }

  return (
    <div className="bg-slate-200 h-full w-full p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          Wallet Details
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-4 mb-4 rounded">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Name</label>
          <input
            type="text"
            value={wallet.name || ""}
            onChange={(e) => setWallet({ ...wallet, name: e.target.value })}
            disabled={!isUpdating || isSaving}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none 
            ${
              isUpdating
                ? "bg-white border-blue-300 focus:ring focus:ring-blue-200"
                : "bg-gray-100 border-gray-300"
            }`}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600 font-medium">Created at:</span>
          <span className="text-gray-900">
            {wallet.created_at ? new Date(wallet.created_at).toLocaleString() : ""}
          </span>
        </div>
        <div className="mt-8 flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => window.history.back()}
          >
            Back
          </button>
          <div className="flex gap-2">
            <button
              className={`bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition 
              ${isUpdating ? "bg-yellow-500 hover:bg-yellow-600" : ""}`}
              onClick={handleUpdate}
              disabled={isSaving}
            >
              {isUpdating ? (isSaving ? "Saving..." : "Save") : "Update"}
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowWallet;
