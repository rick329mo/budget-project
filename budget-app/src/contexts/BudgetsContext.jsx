import React, { useContext, useState } from "react"
const BudgetsContext = React.createContext()
import { v4 as uuidV4 } from "uuid"

export function useBudgets() {
    return useContext(BudgetsContext)
}

// budgets:
// {
//     id:
//     name:
//     max:
// }

// expenses:
// {
//     id:
//     budgetId:
//     amount:
//     description:
// }


export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    function addExpense() {

    }
    function addBudget() {
        setBudgets(prevBudgets => {
            return [...prevBudgets, { id: uuidV4()}]
        })
    }
    function deleteBudget() {

    }
    function deleteExpense() {

    }
    
    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>{children}</BudgetsContext.Provider>
    )
}