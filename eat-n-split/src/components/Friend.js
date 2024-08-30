
import { AddFriendForm } from "./AddFriendForm";
import { FriendList } from "./FriendList";
import { useState } from "react";
import { BillForm } from "./BillForm";
import classes from './Friend.module.css'

export const Friend = ({ friends, handleSelect, selectedFriend, handleAddFriends, updateBalance }) => {
  const [isAddFriendFormOpen, setIsAddFriendFormOpen] = useState(false);

  const getSelectedFriendData = () => {
    const friend = friends.find(el => el.id === selectedFriend);
    return friend;
  }

  const selectedFriendData = getSelectedFriendData();

  const handleAddFriendFormClick = () => {
    setIsAddFriendFormOpen(!isAddFriendFormOpen);
  }

  return (
    <div className={classes['friend']}>
      <div className={classes['friend-list-container']}>
        <FriendList
          friends={friends}
          handleSelect={handleSelect}
          selectedFriend={selectedFriend}
          isAddFriendFormOpen={isAddFriendFormOpen}
          handleAddFriendFormClick={handleAddFriendFormClick}
        />
        { isAddFriendFormOpen ?
            <AddFriendForm handleFormSubmission={handleAddFriends} handleAddFriendFormClick={handleAddFriendFormClick}/>
            : ""
        }
      </div>
      { selectedFriend ?
        <div className={classes['bill-container']}>
          <BillForm updateBalance={updateBalance} friend={selectedFriendData} />
        </div> : ""
      }
    </div>
  )
}
