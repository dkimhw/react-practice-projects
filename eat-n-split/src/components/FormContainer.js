import classes from './FormContainer.module.css'

export const FormContainer = ({ children, style }) => {

  return (
    <div className={classes['form']} style={style}>
      { children }
    </div>
  )
}
