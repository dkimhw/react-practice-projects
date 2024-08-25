import classes from './FriendItem.module.css'
import { Button } from './Button';

export const FriendItem = ({ imageURL, id, name, balance, selectedFriend, handleSelect }) => {
  let balanceMsg;
  if (balance === 0) {
    balanceMsg = `You and ${name} are even`
  } else if (balance < 0) {
    balanceMsg = `You owe ${name} $${balance}`
  } else {
    balanceMsg = `${name} owes you $${balance}`
  }

  const isSelected = selectedFriend === id;

  return (
    <div className={`${classes['friend-item']} ${isSelected ? classes['friend-item-selected'] : ""}`}>
      <img src={imageURL} alt="user profile" className={classes['friend-item-img']}></img>
      <div>
        <h3 className={classes['friend-item-name']}>{name}</h3>
        <p>{balanceMsg}</p>
      </div>
      <Button value={id} handleClick={(evt) => {handleSelect(evt.target?.value)}}>Select</Button>
    </div>
  )
}
