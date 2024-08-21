import classes from './FriendItem.module.css'
import { Button } from './Button';

export const FriendItem = ({ imageURL, name, balance }) => {
  let balanceMsg;

  if (balance === 0) {
    balanceMsg = `You and ${name} are even`
  } else if (balance < 0) {
    balanceMsg = `You owe ${name} $${balance}`
  } else {
    balanceMsg = `${name} owes you $${balance}`
  }

  console.log(imageURL);

  return (
    <div className={classes['friend-item']}>
      <img src={imageURL} alt="user profile" className={classes['friend-item-img']}></img>
      <div>
        <h3 className={classes['friend-item-name']}>{name}</h3>
        <p>{balanceMsg}</p>
      </div>
      <Button>Select</Button>
    </div>
  )
}
