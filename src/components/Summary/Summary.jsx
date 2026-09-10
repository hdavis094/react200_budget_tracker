import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Summary = () => {
    const {state} = useContext(AppContext)

    const calculateTotal = (items) => {
        return items.reduce((total,item) => total + item.amount, 0);
    };

const totalIncome = calculateTotal(state.incomes);
const totalExpenses = calculateTotal(state.expenses);
const balance = totalIncome - totalExpenses;

return (
        <div className="bg-blue-100 border border-blue-500 rounded-md p-4 mt-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p className="mb-2">Total Income: ${totalIncome.toFixed(2)}</p>
            <p className="mb-2">Total Expense: ${totalExpenses.toFixed(2)}</p>
            <p className="font-bold">Left after spending: ${balance.toFixed(2)}</p>
        </div>
    );
};

export default Summary;