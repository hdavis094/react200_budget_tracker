import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const IncomeEntries = () => {
  const { state, dispatch } = useContext(AppContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addIncome = () => {
    dispatch({
      type: "ADD_INCOME",
      payload: { description, amount: parseFloat(amount) },
    });
    setDescription("");
    setAmount("");
  };

  return (
    <div className="bg-green-100 border border-green-500 rounded-md p-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Income Entries</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          className="border p-2 w-full mb-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="border p-2 w-full mb-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
          onClick={addIncome}
        >
          + Add Income
        </button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border p-2">Description</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.incomes.map((income) => (
            <tr key={income.id}>
              <td className="border p-2">{income.description}</td>
              <td className="border p-2">{income.amount.toFixed(2)}</td>
              <td className="border p-2">
                <button
                  className="bg-gray-600 text-white px-4 py-1 rounded gap-4 me-4"
                  onClick={() =>
                    dispatch({
                      type: "EDIT_INCOME",
                      payload: { id: income.id },
                    })
                  }
                >
                  Edit
                </button>

                <button
                  className="bg-red-600 text-white px-4 py-1 rounded"
                  onClick={() =>
                    dispatch({
                      type: "DELETE_INCOME",
                      payload: { id: income.id },
                    })
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeEntries;
