
import classes from './TextInput.module.css'

export const InputLabel = ({ forText, labelText }) => {
  return (
    <label className={classes['label']} htmlFor={forText}>{labelText}</label>
  )
}
