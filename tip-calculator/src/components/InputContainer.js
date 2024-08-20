import classes from "./InputList.module.css"

export const InputContainer = ({ children }) => {
  return (
    <div className={classes['container']}>
      {children}
    </div>

  )
}
