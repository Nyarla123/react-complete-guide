import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import '../../styles/Expenses.css'
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ items }) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filterExpenses = items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    // const renderExpenseItem = filterExpenses.map(item => {
    //     return (
    //         <ExpenseItem 
    //           key={item.id}
    //           title={item.title}
    //           amount={item.amount}
    //           date={item.date}
    //         />
    //     );
    // }); 

    // let expensesContent = filterExpenses.length > 0 ? renderExpenseItem :<p>No Expenses found.</p>;

    // if(filterExpenses.length > 0) {
    //  expensesContent = renderExpenseItem
    // }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                  selected={filteredYear} 
                  onChangeFilter={filterChangeHandler} 
                />
                <ExpensesChart expenses={filterExpenses}/>
                <ExpensesList items={filterExpenses}/>
                {/* {expensesContent} */}
                {/* {filterExpenses.length === 0 && expensesContent}
                {filterExpenses.length > 0 && renderExpenseItem} */}
                {/* {filterExpenses.length === 0 ? <p>No Expenses found.</p> : renderExpenseItem} */}
                {/* {renderExpenseItem} */}
                {/* {items.map((item) => (
                    <ExpenseItem
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}; */}
                {/* <ExpenseItem
                    title={items[0].title}
                    amount={items[0].amount}
                    date={items[0].date}
                />
                <ExpenseItem
                    title={items[1].title}
                    amount={items[1].amount}
                    date={items[1].date}
                />
                <ExpenseItem
                    title={items[2].title}
                    amount={items[2].amount}
                    date={items[2].date} />
                <ExpenseItem
                    title={items[3].title}
                    amount={items[3].amount}
                    date={items[3].date}
                /> */}
            </Card>
        </div>
    );

};

export default Expenses;