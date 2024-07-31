import classes from './DropdownInput.module.css';

export const DropdownInput = (props) => {
  return (
    <select name={props.name} className={classes["dropdown"]} onChange={props.onChange}>
      { props.options }
    </select>
  )
}
