
import classes from "./FormButton.module.css";


export const FormButton = (props) => {
  return (
    <button className={classes['btn']}>
      {props.text}
    </button>
  )
}
