import { useState, useEffect } from 'react'
import { FormContainer } from './FormContainer'
import { TextInput } from './TextInput'
import classes from './BillForm.module.css'

export const BillForm = ({ friend, updateBalance}) => {
  const [bill, setBill] = useState(null);
  const [expense, setExpense] = useState(null);
  const [friendExpense, setFriendExpense] = useState(null);
  console.log("friend", friend);

  // change handler
  const billChangeHandler = (evt) => {
    setBill(evt.target.vaule)
  }

  const expenseChangeHandler = (evt) => {
    setExpense(evt.target.value)
  }

  useEffect(() => {
    let remainingExpense = bill - expense;
    console.log("bill", bill)
    setFriendExpense(remainingExpense)
  }, [bill, expense])


  // Add drop down input
  return (
    <FormContainer>
      <h2 className={classes['bill-form-title']}>{`Split a bill with ${friend?.name}`}</h2>
      <form>
        <TextInput name="bill" value={bill} labelText={"Bill value"} onChange={billChangeHandler} />
        <TextInput name="expense" value={expense} labelText={"Your expense"} onChange={expenseChangeHandler} />
        <TextInput name="friendExpense" value={friendExpense} labelText={`${friend?.name}'s expense`} isDisabled={true}/>

        <button className={classes['btn']}>Split bill</button>
      </form>
    </FormContainer>
  )
}
