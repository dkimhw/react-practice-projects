import classes from './Form.module.css';
import { DropdownInput } from './DropdownInput';
import { TextInput } from './TextInput';
import { FormButton } from './FormButton';
import { useState } from 'react';

export const Form = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [itemText, setItemText] = useState("");

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    const item = { id: Date.now(), itemQty: quantity, itemText: itemText, isChecked: false }

    props.addTravelItem(item);

    // reset form
    setQuantity(1);
    setItemText("");
  }

  return (
    <form className={classes["trip-form"]} onSubmit={handleSubmitForm}>
      <p className={classes["form-text"]}>What do you need for your trip?</p>
      <DropdownInput name="quantity" numOfOptions={20} onChange={(e) => setQuantity(e.target.value)}/>
      <TextInput name="itemText" placeholder="Item..." onChange={(e) => setItemText(e.target.value)}/>
      <FormButton text="Add" />
    </form>
  )
}
