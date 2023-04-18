import "./CostForm.css";
import React, { useState } from "react";


const CostForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setuserInput] = useState({
  //     name: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const nameChangeHandler = (event) => {
  // setuserInput((previousState)=>{
  //     return {
  //         ...previousState,
  //         name: event.target.value
  //     }
  // })
  //   };

  //   const amountChangeHander = (event) => {
  //     setuserInput({
  //       ...userInput,
  //       amount: event.target.value
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     setuserInput({
  //       ...userInput,
  //       date: event.target.value
  //     });
  //   };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const amountChangeHander = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: name,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveCostData(costData);
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value ={name} 
          onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={amountChangeHander}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={dateChangeHandler}
            min="2019-01-01"
            step="2023-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
