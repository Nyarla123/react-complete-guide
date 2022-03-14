import React from "react";
import '../../styles/ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({items}) => {

    if(items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    };

    const renderExpenseItem = items.map(item => {
        return (
            <ExpenseItem 
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
        );
    }); 

    return (
        <ul className="expenses-list">
            {renderExpenseItem}
        </ul>
    )


};

export default ExpensesList;