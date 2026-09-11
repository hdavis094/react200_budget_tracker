import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const ExpenseEntries= () => {
    const { state, dispatch } = useContext(AppContext);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [editingId, setEditingId] = useState(null)

    const addExpense = () => {
        if(editingId!==null){
            dispatch({
                type: 'EDIT_EXPENSE',
                payload: { id:editingId, description, amount: parseFloat(amount) },
            });
            setEditingId(null)
        } else {
            dispatch({ type: 'ADD_EXPENSE', 
                payload: { description, amount: parseFloat(amount) } });
            };
        setDescription('');
        setAmount('');
    };

    const startEdit = (expense) => {
        setEditingId(expense.id);
        setDescription(expense.description);
        setAmount(expense.amount);
    };

    return (
        <div className="bg-red-100 border border-red-500 rounded-md p-4 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Expense Entries</h2>
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
                    className="bg-red-500 text-white px-4 py-2 rounded w-full"
                    onClick={addExpense}
                >
                    - Add Expense
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
                    {state.expenses.map((expense,index) => (
                        <tr key={index}>
                            <td className="border p-2">{expense.description}</td>
                            <td className="border p-2">{expense.amount}</td>
                            <td className="border p-2">
                                <button 
                                    className="bg-gray-600 text-white px-4 py-1 rounded gap-4 me-4"
                                    onClick={()=>
                                        startEdit(expense)
                                    }>
                                        Edit
                                </button>
                                <button
                                    className="bg-red-600 text-white px-4 py-1 rounded gap-4 me-4"
                                    onClick={() =>
                                        dispatch({
                                            type: "DELETE_EXPENSE",
                                            payload: { id: expense.id },
                                        })
                                    }>
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

export default ExpenseEntries;
