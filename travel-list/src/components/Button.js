import classes from './Button.module.css';

export const Button = ({ buttonText, onClick }) => {
  return (
    <button className={classes['btn']} onClick={onClick}>
      {buttonText}
    </button>
  )
};
