
import classes from './TextInput.module.css'

export const InputLabel = ({ labelText }) => {
  return (
    <label className={classes['label']}>{labelText}</label>
  )
}
