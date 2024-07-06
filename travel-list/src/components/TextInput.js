import classes from './TextInput.module.css';

export const TextInput = (props) => {
  return (
    <input
      name={props.name}
      type="text"
      placeholder={props.placeholder}
      className={classes['text-input']}
      onChange={props.onChange}
    />
  )
};
