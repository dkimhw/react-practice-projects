import classes from './FriendItem.module.css'
import { Button } from './Button';

export const FriendItem = ({ imageURL, id, name, balance, selectedFriend, handleSelect }) => {
  let balanceMsg;
  let balanceMsgCSS = "";
  let parseBalance = Math.abs(balance);

  if (balance === 0) {
    balanceMsg = `You and ${name} are even`;
  } else if (balance < 0) {
    balanceMsg = `You owe ${name} $${parseBalance}`;
    balanceMsgCSS = "friend-item-msg-positive";
  } else {
    balanceMsg = `${name} owes you $${parseBalance}`;
    balanceMsgCSS = "friend-item-msg-negative";
  }

  const isSelected = selectedFriend === id;

  return (
    <div className={`${classes['friend-item']} ${isSelected ? classes['friend-item-selected'] : ""}`}>
      <img src={imageURL} alt="user profile" className={classes['friend-item-img']}></img>
      <div>
        <h3 className={classes['friend-item-name']}>{name}</h3>
        <p className={`${classes['friend-item-msg']} ${classes[balanceMsgCSS]}`}>{balanceMsg}</p>
      </div>
      <Button value={id} handleClick={(evt) => {handleSelect(evt.target?.value)}}>
        {selectedFriend === id ? "Close" : "Select"}
      </Button>
    </div>
  )
}
