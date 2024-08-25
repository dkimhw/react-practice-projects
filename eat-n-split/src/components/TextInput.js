
import classes from './TextInput.module.css'

export const TextInput = ({ labelText }) => {
  return (
    <div className={classes['input-group']}>
      <label>{labelText}</label>
      <input type="text"></input>
    </div>
  )
}
