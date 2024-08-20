import classes from './BillResult.module.css'

export const BillResult = ({ bill, tip}) => {
  let msg = Number.isNaN(bill) ? "Please enter a valid bill" : `You pay ${bill}. Tip amount: ${tip}`;

  return (
    <div className={classes['center']}>
      <h1>{msg}</h1>
    </div>
  )
}
