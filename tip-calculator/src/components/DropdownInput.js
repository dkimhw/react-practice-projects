import classes from './DropdownInput.module.css'

export const DropdownInput = ({ name, options, handleChange }) => {
  return (
    <select className={classes["dropdown"]} onChange={handleChange}>
      { options }
    </select>
  )
}
