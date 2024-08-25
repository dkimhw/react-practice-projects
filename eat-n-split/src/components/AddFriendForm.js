import { TextInput } from "./TextInput";
import classes from './AddFriendForm.module.css'

export const AddFriendForm = ({ handleFormSubmission }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFormSubmission();
  }

  return (
    <form method="post" onSubmit={handleSubmit} className={classes['add-friend-form']}>
      <TextInput labelText={"Friend Name"}/>
      <TextInput labelText={"Image URL"}/>
      <button>Add friend</button>
    </form>
  )
}
