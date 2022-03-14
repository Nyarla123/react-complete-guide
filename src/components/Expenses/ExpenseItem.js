import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import '../../styles/ExpenseItem.css';

const ExpenseItem = ({ title, date, amount }) => {
  
  const [titles, setTitles] = useState(title);

  const clickHandler = () => {
    setTitles('update');
    console.log('click');  
  };
  console.log(title);

  return (
      <li>
        <Card className="expense-item">
          <ExpenseDate date={date}/>
          <div className="expense-item__description">
            <h2>{titles}</h2>
          </div>
          <div className="expense-item__price">{amount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </Card>
      </li>
  );
};

export default ExpenseItem;