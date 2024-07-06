import classes from './DropdownInput.module.css';

export const DropdownInput = (props) => {
  const vals = [...Array(props?.numOfOptions).keys()];
  const options = props?.numOfOptions ? vals.map((val, idx) => <option value={val + 1} key={idx}>{val + 1}</option>) : '';

  return (
    <select name={props.name} className={classes["dropdown"]} onChange={props.onChange}>
      { options }
    </select>
  )
}
