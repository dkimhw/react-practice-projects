import { TextInput } from "./TextInput";
import classes from './AddFriendForm.module.css'
import { useState } from 'react'

export const AddFriendForm = ({ handleFormSubmission }) => {
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");

  const extractFriendId = (url) => {
    const re = /\?u=(\d+)/;
    const id = Number(url.match(re)[1]);
    return id;
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
    <form method="post" onSubmit={handleSubmit} className={classes['add-friend-form']}>
      <TextInput name="name" value={name} labelText={"Friend Name"} handleInputChange={nameChangeHandler} />
      <TextInput name="url" value={imgURL} labelText={"Image URL"} handleInputChange={imgURLHandler} />
      <button className={classes['btn']}>Add friend</button>
    </form>
  )
}
