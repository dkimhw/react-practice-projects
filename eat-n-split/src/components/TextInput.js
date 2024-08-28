
import classes from './TextInput.module.css'

export const TextInput = ({ labelText, handleInputChange, isDisabled }) => {
  return (
    <div className={classes['input-group']}>
      <label className={classes['label']}>{labelText}</label>
      <input type="text" onChange={handleInputChange} disabled={isDisabled}></input>
    </div>
  )
}
