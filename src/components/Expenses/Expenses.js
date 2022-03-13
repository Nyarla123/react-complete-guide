import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import '../../styles/Expenses.css'
import ExpenseFilter from './ExpensesFilter';

const Expenses = ({ items }) => {

    const [filterYear, setFilterYear] = useState('2020');
    
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const renderItems = items.map(item => {
        return (
            <ExpenseItem key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        );
    }); 

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
                {renderItems}
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