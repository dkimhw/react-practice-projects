import classes from './AddFriendForm.module.css'

export const FormContainer = ({ children }) => {

  return (
    <div className={classes['form']} >
      { children }
    </div>
  )
}
