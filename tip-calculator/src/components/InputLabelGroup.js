import { InputLabel } from "./InputLabel"
import classes from './InputLabelGroup.module.css'

export const InputLabelGroup = ({ labelText, inputComponent }) => {
  return (
    <div className={classes['input-group']}>
      <InputLabel>
        <span>{labelText}</span>
      </InputLabel>
      { inputComponent }
    </div>
  )
}
