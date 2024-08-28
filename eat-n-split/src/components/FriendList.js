import { FriendItem } from "./FriendItem"
import { Button } from "./Button"
import classes from './FriendList.module.css'

export const FriendList = ({ friends, handleSelect, selectedFriend, isAddFriendFormOpen, handleAddFriendFormClick }) => {
  return (
    <div className={classes['friend-list']}>
      { friends ? friends.map((friend, idx) => {
        return (
          <FriendItem
            key={friend.id}
            id={friend.id}
            imageURL={friend.image}
            name={friend.name}
            balance={friend.balance}
            selectedFriend={selectedFriend}
            handleSelect={handleSelect}
          />
        )
      }) : ""}
      { !isAddFriendFormOpen ? <Button handleClick={handleAddFriendFormClick}>Add friend</Button> : "" }
    </div>
  )
}
