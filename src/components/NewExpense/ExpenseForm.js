import React, {useState} from "react";
import '../../styles/ExpenseForm.css'

const ExpenseForm = ({onSaveExpenseData}) => {

    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredtitle : '',
    //     enteredAmount : '',
    //     enteredDate : '',
    // });

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     setEnteredTitle: e.target.value
        // });
        // setUserInput((prevState) => { // 위에 방식은 오류가 생길수 있음 이 방식 추천 암기
        //     return { ...prevState, setEnteredTitle: e.target.value };
        // });
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     setEnteredAmount: e.target.value
        // });
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     setEnteredDate: e.target.value
        // });
    };

    const sumbitHandler = (e) => {

        e.preventDefault();
        const expenseData = {
            title: enteredtitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        };
        //console.log(expenseData);
        onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={sumbitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredtitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="sumbit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;
