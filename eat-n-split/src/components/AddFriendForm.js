import classes from './AddFriendForm.module.css'
import { useState } from 'react'
import { FormContainer } from "./FormContainer";
import { TextInput } from "./TextInput";
import { InputLabel } from "./InputLabel";

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
    <FormContainer style={{"marginTop": "1rem"}}>
      <form method="post" onSubmit={handleSubmit}>
        <div className={classes['form-grid']}>
          <InputLabel forText="name" labelText={"Friend name"} />
          <TextInput id="name" value={name} handleInputChange={nameChangeHandler} />

          <InputLabel forText="url" labelText={"Image URL"} />
          <TextInput id="url" value={imgURL} handleInputChange={imgURLHandler} />

          <div className={classes['btn-container']}>
            <button className={classes['btn']}>Add friend</button>
            <button className={`${classes['btn']} ${classes['close-btn']}`} onClick={handleAddFriendFormClick}>Close</button>
          </div>
        </div>
      </form>
    </FormContainer>
  )
}
