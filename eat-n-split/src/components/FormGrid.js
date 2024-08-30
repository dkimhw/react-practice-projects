import classes from './FormGrid.module.css'

export const FormGrid = ({ children }) => {
  return (
    <div className={classes['form-grid']}>
      {children}
    </div>
  )
}
