import { useState, useEffect } from 'react'
import { FormContainer } from './FormContainer'
import classes from './BillForm.module.css'
import { FormGrid } from './FormGrid'
import { InputLabel } from './InputLabel'
import { TextInput2 } from './TextInput2'

export const BillForm = ({ friend, updateBalance}) => {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [friendExpense, setFriendExpense] = useState("");
  const [payer, setPayer] = useState("you");

  // change handler
  const billChangeHandler = (evt) => {
    setBill(evt.target.value);
  }

  const expenseChangeHandler = (evt) => {
    setExpense(evt.target.value);
  }

  const payerChangeHandler = (evt) => {
    setPayer(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let friendId = evt.target.value;
    let amount;
    console.log("payer", payer);

    // bill = 100; you bill: 45; friend's bill: 55
    // let's say you paid - then, the friend owes 55 dollars
    // let's say friend paid - then, you own the friend 45
    if (payer === 'you') {
      amount = friendExpense;
    } else if (payer === 'friend') {
      amount = expense;
    }

    updateBalance(friendId, amount, payer);
  }

  useEffect(() => {
    let remainingExpense;
    if (bill === "" || expense === "") {
      remainingExpense = "";
    } else {
      remainingExpense = bill - expense;
    }

    setFriendExpense(remainingExpense)
  }, [bill, expense]);

  // Add drop down input
  return (
    <FormContainer style={{"padding": "2.5rem", "minWidth": "300px"}}>
      <h2 className={classes['bill-form-title']}>{`Split a bill with ${friend?.name}`}</h2>
      <form>
        <FormGrid>
          <InputLabel labelText={"Bill value"}/>
          <TextInput2 name="bill" value={bill} handleInputChange={billChangeHandler} />

          <InputLabel labelText={"Your expense"}/>
          <TextInput2 name="expense" value={expense} handleInputChange={expenseChangeHandler} />

          <InputLabel labelText={`${friend?.name}'s expense`}/>
          <input value={friendExpense} disabled={true} readOnly />

          <InputLabel labelText={"Who is paying the bill?"}/>
          <select name="payer" onChange={payerChangeHandler}>
            <option value="you">You</option>
            <option value="friend">{friend?.name}</option>
          </select>

          <button value={friend?.id} className={classes['btn']} onSubmit={handleSubmit}>Split bill</button>
        </FormGrid>
      </form>
    </FormContainer>
  )
}
