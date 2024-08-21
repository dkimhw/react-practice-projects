import classes from './Button.module.css'

export const Button = ({ children }) => {
  return (
    <button className={classes['btn']}>
      {children}
    </button>
  )
}
