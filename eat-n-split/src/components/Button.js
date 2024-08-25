import classes from './Button.module.css'

export const Button = ({ children, handleClick, value }) => {
  return (
    <button className={classes['btn']} value={value} onClick={handleClick}>
      {children}
    </button>
  )
}
