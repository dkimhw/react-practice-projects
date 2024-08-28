
import { AddFriendForm } from "./AddFriendForm";
import { FormContainer } from './FormContainer'
import { FriendList } from "./FriendList";
import { useState } from "react";

export const Friend = ({ friends, handleSelect, selectedFriend, handleAddFriends }) => {
  const [isAddFriendFormOpen, setIsAddFriendFormOpen] = useState(false);

  const handleAddFriendFormClick = () => {
    setIsAddFriendFormOpen(!isAddFriendFormOpen);
  }

  return (
    <>
      <FriendList
        friends={friends}
        handleSelect={handleSelect}
        selectedFriend={selectedFriend}
        isAddFriendFormOpen={isAddFriendFormOpen}
        handleAddFriendFormClick={handleAddFriendFormClick}
      />
      { isAddFriendFormOpen ?
        <FormContainer>
          <AddFriendForm handleFormSubmission={handleAddFriends}/>
        </FormContainer> : ""
      }
    </>
  )
}
