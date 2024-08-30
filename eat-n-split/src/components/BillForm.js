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

  // change handler
  const billChangeHandler = (evt) => {
    setBill(evt.target.value);
  }

  const expenseChangeHandler = (evt) => {
    setExpense(evt.target.value);
  }

  useEffect(() => {
    let remainingExpense = bill - expense;
    setFriendExpense(remainingExpense)
  }, [bill, expense])

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
          <button className={classes['btn']}>Split bill</button>
        </FormGrid>
      </form>
    </FormContainer>
  )
}
