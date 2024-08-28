import { useState } from 'react'
import { FormContainer } from './FormContainer'
import { TextInput } from './TextInput'
import classes from './BillForm.module.css'

export const BillForm = ({ friend, updateBalance}) => {
  const [bill, setBill] = useState(null);
  const [expense, setExpense] = useState(null);
  const [friendExpense, setFriendExpense] = useState(null);


  // change handler
  const billChangeHandler = (evt) => {
    setBill(evt.target.vaule)
  }

  const expenseChangeHandler = (evt) => {
    setExpense(evt.target.value)
  }

  const friendExpenseChangeHandler = (evt) => {
    setFriendExpense(evt.target.value)
  }

  return (
    <FormContainer>
      <h2>{`Split a bill with ${friend?.name}`}</h2>
      <form>
        <TextInput name="bill" value={bill} labelText={"Bill value"} onChange={billChangeHandler} />
        <TextInput name="expense" value={expense} labelText={"Your expense"} onChange={expenseChangeHandler} />
        <TextInput name="friendExpense" value={friendExpense} labelText={"Your expense"} onChange={friendExpenseChangeHandler} isDisabled={true}/>

        <button className={classes['btn']}>Split bill</button>
      </form>
    </FormContainer>
  )
}
