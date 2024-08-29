import { TextInput } from "./TextInput";
import classes from './AddFriendForm.module.css'
import { useState } from 'react'
import { FormContainer } from "./FormContainer";

export const AddFriendForm = ({ handleFormSubmission, handleAddFriendFormClick }) => {
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");

  const extractFriendId = (url) => {
    const re = /\?u=(\d+)/;
    try {
      const id = Number(url.match(re)[1]);
      return id;
    } catch (e) {
      return 1;
    }
  }

  const nameChangeHandler = (evt) => {
    setName(evt.target?.value);
  }

  const imgURLHandler = (evt) => {
    setImgURL(evt.target?.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newFriend = {
      id: extractFriendId(imgURL),
      name: name,
      image: imgURL,
      balance: 0,
    }

    handleFormSubmission(newFriend);
  }

  return (
    <FormContainer>
      <form method="post" onSubmit={handleSubmit} className={classes['add-friend-form']}>
        <TextInput name="name" value={name} labelText={"Friend Name"} handleInputChange={nameChangeHandler} />
        <TextInput name="url" value={imgURL} labelText={"Image URL"} handleInputChange={imgURLHandler} />
        <div className={classes['btn-container']}>
          <button className={classes['btn']}>Add friend</button>
          <button className={`${classes['btn']} ${classes['close-btn']}`} onClick={handleAddFriendFormClick}>Close</button>
        </div>
      </form>
    </FormContainer>
  )
}
