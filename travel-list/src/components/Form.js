import classes from './Form.module.css';
import { DropdownInput } from './DropdownInput';
import { TextInput } from './TextInput';
import { FormButton } from './FormButton';
import { useState } from 'react';

export const Form = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [itemText, setItemText] = useState("");
  const vals = [...Array(20).keys()];
  const options = vals.map((val, idx) => <option value={val + 1} key={idx}>{val + 1}</option>);

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
      <DropdownInput name="quantity" options={options} onChange={(e) => setQuantity(e.target.value)}/>
      <TextInput name="itemText" placeholder="Item..." onChange={(e) => setItemText(e.target.value)}/>
      <FormButton text="Add" />
    </form>
  )
}
