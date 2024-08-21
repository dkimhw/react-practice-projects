import { FriendItem } from "./FriendItem"
import classes from './FriendList.module.css'

export const FriendList = ({ friends }) => {
  return (
    <div className={classes['friend-list']}>
      { friends ? friends.map((friend, idx) => {
        return <FriendItem key={idx} imageURL={friend.image} name={friend.name} balance={friend.balance} />
      }) : ""}
    </div>
  )
}
